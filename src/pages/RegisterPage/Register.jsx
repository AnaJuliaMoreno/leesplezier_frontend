import "./Register.css"
import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {IoEyeOutline} from "react-icons/io5";
import {IoEyeOffOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";


function Register() {


    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            username: '',
            lastName: '',
            email: '',
            role: '',
            password: ""
        }
    });
    // State for password visibility
    const [visible, setVisible] = useState(false);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [newUser, setNewUser] = useState(null);

    const navigate = useNavigate();
    const {login, logout} = useContext(AuthContext);


    async function addUser(newUser) {
        try {
            const response = await axios.post("http://localhost:8080/users", newUser);
            console.log("Data submitted successfully:", newUser);
            return response.data; // This contains the auth token
        } catch (e) {
            //403 error is "forbidden", this is a temporary solution
            if (e.response && e.response.status === 403) {
                console.error("Error adding user: Username is already in use.");
                throw new Error("Username is already in use. Please choose a different username.");
            } else {
                console.error("Error adding user:", e);
                throw e;
            }
        }
    }

    //This function authenticates user and returns a token,
    // so that log in after registration in not necessary.
    async function authenticateUser(username, password) {
        try {
            const response = await axios.post("http://localhost:8080/authenticate", {
                username,
                password
            });
            console.log(response.data);
            return response.data.jwt; // This contains the auth token
        } catch (e) {
            console.e("Error authenticating user:", e);
            throw e;
        }
    }

    async function onSubmit(data) {
        setError(null);
        setSuccess(false);

        try {

            const newUser = {...data};

            await addUser(newUser);
            const authData = await authenticateUser(data.username, data.password);
            setNewUser(newUser);
            // Use the login function from AuthContext to log in the user
            console.log(authData);
            login(authData);

            setNewUser(newUser);
            setSuccess(true);
        } catch (e) {
            if (axios.isCancel(e)) {
                console.error('Request cancelled to avoid a memory leak');
            } else {
                console.error('An error occurred:', e);
                setError(e.response ? e.response.data : "An error occurred");
            }
        }
    }

    function handleNavigateToProfile() {
        navigate(`/profile/${newUser.username}`);
    }

    function handleNavigateToRolePage() {
        const rolePage = newUser.role === 'ROLE_VOLUNTEER' ? '/volunteers' : '/parents';
        navigate(rolePage);
    }

    function handleLogout() {
        logout()
        navigate("/");
    }


    return (
        <section>
            {success ? (
                <div className="success-message">
                    <p>Succesvol geregistreerd!</p>
                    <button onClick={handleNavigateToProfile}>Ga naar "profiel"</button>
                    <button onClick={handleNavigateToRolePage}>
                        {newUser.role === 'ROLE_VOLUNTEER' ? 'Ga naar "vrijwilligers"' : 'Ga naar "ouders"'}
                    </button>
                    <button onClick={handleLogout}>logout</button>

                </div>
            ) : (
                <form className="sing-up" onSubmit={handleSubmit(onSubmit)}>

                    <h2>Gegevens</h2>

                    <div>
                        <label htmlFor="details-role">Registeren als :</label>
                        <select id="details-role" {...register("role", {required: true, minLength: 1})}>
                            <option value="">Kies een role</option>
                            <option value="ROLE_VOLUNTEER">vrijwilliger</option>
                            <option value="ROLE_PARENT">ouder</option>
                        </select>


                    </div>
                    {errors.role && <span className="error">
                    Kies één role </span>}

                    <div>
                        <label htmlFor="details-username">Gebruikersnaam:</label>
                        <input
                            type="text"
                            id="details-username"
                            autoComplete="on"
                            {...register("username", {required: true, minLength: 6,})}

                        />


                    </div>
                    {errors.userName && <span className="error">
                    Gebruikersnaam is verplicht  </span>}
                    {error && <div className="error">Deze gebruikersnaam bestaat al </div>}
                    <div>
                        <label htmlFor="details-last-name">Achternaam:</label>
                        <input type="text" id="details-last-name" {...register("lastName", {
                            required: true,
                            pattern: /^[A-Za-z\s]+$/i
                        })} />

                    </div>
                    {errors.lastName && <span className="error">
                    Achternaam is verplicht </span>}
                    <div>
                        <label htmlFor="details-email">Email adres:</label>
                        <input type="email" id="details-email"
                               autoComplete="off" {...register("email", {required: true})} />

                    </div>
                    {errors.email && <span className="error">
                    Email is verplicht </span>}
                    <div>
                        <label htmlFor="details-password">Wachtwoord: </label>
                        <input
                            type={visible ? "text" : "password"}
                            placeholder="minstens 8 tekens"
                            onChange={(e) => password(e.target.value)}

                            id="details-password" {...register("password", {required: true, minLength: 8})}

                        />

                        <span onClick={() => setVisible(!visible)}> {visible ? <IoEyeOutline/> :
                            <IoEyeOffOutline/>} </span>
                    </div>
                    {errors.password && <span className="error">
                    Het wachtwoord moet langer zijn </span>}


                    <input type="submit" onSubmit={onSubmit}/>
                </form>
            )}
        </section>

    );
}

export default Register;