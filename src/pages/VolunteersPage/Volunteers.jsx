import './Volunteers.css'
import SmallTile from "../../components/smallTile/SmallTile.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";


function Volunteers() {
    const {user, isAuth} = useContext(AuthContext);
    const[isVolunteer, setIsVolunteer] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
           // console.log("mounted")

            if (user) {
                try {
                    const response = await axios.get(`http://localhost:8080/users/${user.username}`);
                    setIsVolunteer(response.data.role === 'ROLE_VOLUNTEER');
                   // console.log("response", response.data.role)
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                }
            }
        };

        void fetchUserData();
    }, [user]);


    return (
        <section>
            <div className='volunteers-background'>
                <div className="page-intro-text" >
                <h2>Welkom Vrijwilligers bij ons Leesprogramma</h2>
                <p>We zijn verheugd je te verwelkomen op deze waardevolle reis om de liefde voor
                    lezen te stimuleren bij kinderen die hun vaardigheden willen verbeteren. Hier
                    vind je alle tools en middelen die nodig zijn om jouw leessessies boeiend en
                    effectief te maken. Laten we samen een passie voor literatuur stimuleren en
                    jonge geesten aanmoedigen om door de pagina's van verbeelding te vliegen.
                    Bedankt voor je toewijding om kinderen te helpen gedijen!</p>
                </div>
                <div className="tiles-container">
                    <SmallTile
                        title="Waar te beginnen?"
                        text="Hier vind jij een gids om je leessessie op te zetten"
                        internalLink='/aanpak'></SmallTile>

                    <SmallTile
                        title="Waar op te focussen?"
                        text='Belangrijke concepten om je te helpen je leesoefeningen te focussen.'
                        internalLink="/concepts"></SmallTile>
                    <SmallTile
                        title="Op zoek naar inspiratie?"
                        text='Hier vind je boeksuggesties. Je hoeft alleen maar je favoriete onderwerp in te vullen.'
                        internalLink='/books'></SmallTile>
                    {isAuth ? <SmallTile
                            title="Onze lezers"
                            text="Hier vind jij een lijst van kleine lezers die aan het wachten
                            zijn op jou."
                            internalLink="/readers"></SmallTile> :
                        <SmallTile
                            title="Onze lezers"
                            text="Log in om te kijken aan wie je leessessie kan aanbieden"
                            internalLink="/login"></SmallTile>
                    }
                    {isAuth && isVolunteer ? (
                    <SmallTile
                        title="Klaar om een bericht te plaatsen?"
                        text=" Schrijf een post om lezers te laten weten waar de volgende leessessie plaatsvindt."
                        internalLink="/new-sessions"></SmallTile>
                    ) : (
                        <SmallTile
                            title="Sessie aanmaken?"
                            text="Log in als vrijwilliger om een nieuwe sessie te aanbieden"
                            internalLink="/login"></SmallTile>)}
                </div>
            </div>
        </section>
    )
}

export default Volunteers