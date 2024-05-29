import './Parents.css'
import SmallTile from "../../components/smallTile/SmallTile.jsx";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";

function Parents() {
    const {user, isAuth} = useContext(AuthContext);
    const [isParent, setIsParent] = useState(false);

    useEffect(() => {
        const fetchUserRole = async () => {
          //  console.log("mounted")

            if (user) {
                try {
                    const response = await axios.get(`http://localhost:8080/users/${user.username}`);
                    setIsParent(response.data.role === 'ROLE_PARENT');
                 //   console.log("response", response.data.role)
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                }
            }
        };

        void fetchUserRole();
    }, [user]);

    return (
        <section className='parents-background'>
            <div>
                <h1>Welkom ouders</h1>
                <div className="parents-intro-text">

                    Volg deze eenvoudige stappen en laat je kind zijn leesreis met ons beginnen:
                    <ol type="1" id="parents-todo">
                        {!isAuth && <li> Registreer om lid te worden van onze geweldige community.
                        </li>}
                        <li> Maak een profiel van je kind aan zodat onze vrijwilligers
                            weten waar ze nodig zijn en de perfecte leessessie kunnen voorbereiden.
                        </li>
                        <li> Kijk regelmatig op onze sessies prikbord om te zien waar een sessie plaatsvindt.</li>
                    </ol>


                </div>
            </div>
            <div className="tiles-container">
                {!isAuth &&
                    <SmallTile
                        title="Geïnteresseerd?"
                        text="Hier kan je je gemakkelijk registreren als ouder."
                        internalLink='/register'></SmallTile>}
                {isAuth && isParent ? (
                    <SmallTile
                        title="Klaar om mee te doen?"
                        text="Maak een profiel van je kind aan om deel te nemen aan een voorleessessie. "
                        internalLink='/readers-register'></SmallTile>
                ) : (
                    <SmallTile
                        title="Lezer toevoegen?"
                        text="Log in als ouder om een profiel van je kind aan te maken."
                        internalLink="/login"></SmallTile>
                )}

                {isAuth ?
                    <SmallTile
                        title="Welke sessies zijn er?"
                        text="Hier vind je een overzicht van alle leessessies in ons sessies prikbord."
                        internalLink='/sessions'></SmallTile> :
                    <SmallTile
                        title="Welke sessies zijn er?"
                        text="Log in om alle aangeboden leessessies te zien"
                        internalLink='/login'></SmallTile>
                }
            </div>
        </section>
    )
}

export default Parents;