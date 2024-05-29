import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";
import extractRole from "../../helpers/extractRole.js";
import translateRole from "../../helpers/translateRole.js";
import {useNavigate} from "react-router-dom";

function Profile() {
    const {user, logout} = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            //console.log("mounted")

            if (user) {
                try {
                    const response = await axios.get(`http://localhost:8080/users/${user.username}`);
                    setUserData(response.data);
                      // console.log(response)
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                }
            }
        };

        void fetchUserData();
    }, [user]);
  //  console.log("userData", userData)
    function handleNavigateToRolePage() {
        navigate(`/${extractRole(userData.role)}`);

    }
    return (
        <section className="outer-content-container">
        <h1>Profile</h1>

        <div>

            {userData ? (
                <div>
                <div className="page-intro-text">
                    <p>Gebruikersnaam: <strong> {userData.username}</strong></p>
                    <p>Email:<strong>  {userData.email}</strong></p>
                    <p>Achternaam:<strong>  {userData.lastName}</strong></p>
                    <p>Ik ben geregistreerd als <strong> {translateRole(userData.role)}</strong></p>
                </div>
                <button onClick={handleNavigateToRolePage}>
                    Aan de slag!

                </button>
                    <button onClick={logout}>logout</button>
        </div>
            ) : (
                <p>Loading profile data...</p>
            )}
        </div>


    </section>)
}

export default Profile;