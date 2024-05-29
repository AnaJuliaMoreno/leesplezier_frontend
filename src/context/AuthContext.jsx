import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        //console.log("im am mounted")
        const token = localStorage.getItem('token');
        if (token) {
            void login(token);
        }
            else {
            setIsAuth({
                ...isAuth,
                status: 'done',
            })
        }
    }, []);

    const navigate = useNavigate();

    async function login(token) {

        // safe token in local storage
        localStorage.setItem('token', token);
        // Decode token to get user information
        const userInfo = jwtDecode(token);
        const userId = userInfo.sub;


        try {
            // Fetch user data from API using token
            const response = await axios.get(`http://localhost:8080/authenticated`, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });
            const username = response.data.principal.username;
            //console.log("response", response);
            // Set authentication state
            setIsAuth({
                isAuthenticated: true,
                user: {
                    username: username,
                    id: response.data.id
                },
                status: 'done',
            });
        } catch (error) {
            console.error(error);
            setIsAuth({
                ...isAuth,
                status: 'done',
            })
        }

       // console.log("User is logged in");

    }

    const logout = () => {

        // Clear authentication state
        setIsAuth({
            isAuthenticated: false,
            user: null,
            status: 'done',
        });
        // Remove token from local storage
        localStorage.removeItem('token');
        navigate('/');
    };


    const contextData = {
        isAuth: isAuth.isAuthenticated,
        user: isAuth.user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>

            {isAuth.status === 'done' ? children : <p> Loading... </p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;