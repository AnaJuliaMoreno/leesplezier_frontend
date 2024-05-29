import logo from "../../assets/images/logolp.png";
import "./Navigation.css"
import Button from "../button/Button.jsx";
import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import CustomNavLink from "../customNavLink/CustomNavLink.jsx";
import {FaHome} from "react-icons/fa";
import {NavLink} from "react-router-dom";


function Navigation() {
    const {isAuth, user, logout} = useContext(AuthContext);

    return (

        <nav>
            <div className="inner-container">

                <img id="logo" src={logo} alt="logo lees plezier"/>

                <h1 className="slogan_site">Samen lezen, samen groeien!</h1>

                {isAuth ? <Button buttonText="Logout" clickHandler={logout}
                    ></Button> :<div className="inner-container">
                    <NavLink className={({ isActive }) => isActive ? 'login-link active-login' : 'login-link '} to="/register" >Join us</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'login-link active-login' : 'login-link '} to = "/login">login</NavLink>
        </div>  }

            </div>

            <div>
                <ul id="menu-main">
                    <li>
                        <CustomNavLink to="home"> <FaHome/> </CustomNavLink>
                    </li>
                    <li><CustomNavLink to="/the_project">Over ons</CustomNavLink></li>
                    <li><CustomNavLink to="/volunteers">Voor vrijwilligers</CustomNavLink></li>
                    <li><CustomNavLink to="/parents">Voor ouders</CustomNavLink></li>

                    {isAuth &&
                        (<li>
                            <CustomNavLink to={`/profile/${user.username}`}>profile</CustomNavLink>
                        </li>)}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;