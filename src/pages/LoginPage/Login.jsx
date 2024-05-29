import './Login.css'
import React, {useContext, useState} from 'react';
import Button from "../../components/button/Button.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import axios from "axios";
import extractRole from "../../helpers/extractRole.js";

function Login() {
    const {login} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
const [error, setError] = useState(null);
    const navigate = useNavigate();

    //for password visibility
    const [visible, setVisible] = useState(false);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError(null);
    };
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/authenticate',
                {username: formData.username,
                    password: formData.password});

            const token = response.data.jwt;
            login(token)
            // Retrieve the user role using the token
            const userResponse = await axios.get(`http://localhost:8080/users/${formData.username}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const userRole = userResponse.data.role;
            //console.log(userRole);
            navigate(`/${extractRole(userResponse.data.role)}`)
        } catch (e) {
            setError('ongeldige gebruikersnaam of wachtwoord')
            console.error(e)
        }

    }


    return (
        <>
            <h2 className="title-login">Login</h2>
            <form className="log-in-form" onSubmit={handleSubmit}>

                <div className="login">
                    <label htmlFor="details-name">Username:</label>
                    <input
                        type="text"
                        id="details-name"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete='on'
                        required/>
                </div>
                <div className="login">
                    <label htmlFor="password">password:</label>
                    <input type={visible ? "text" : "password"}
                           id="password"
                           name="password"
                           value={formData.password}
                           onChange={handleChange}
                           required
                    />
                    <span onClick={() => setVisible(!visible)}> {visible ? <IoEyeOutline/> : <IoEyeOffOutline/>} </span>

                </div>
                {error && <span className="error">
                    {error} </span>}
                <Button
                    buttonType="submit"
                    buttonText="login"
                    buttonVariant="login"
                ></Button>
            </form>
            <p> Heb je nog geen account?
                <Link to="/register">Registreer</Link></p>
        </>
    );
}

export default Login;