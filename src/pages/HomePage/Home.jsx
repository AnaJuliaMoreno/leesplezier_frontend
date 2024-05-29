import './Home.css';
import Tile from "../../components/tile/Tile.jsx";
import childrenInLibrary from '../../assets/images/childrenInLibrary.jpg'
import readingTogether from '../../assets/images/reading-together.jpg'
import reading1 from '../../assets/images/reading1.jpg'
import brightFuture from '../../assets/images/brightFuture.png'
import React from "react";
import library from "../../assets/images/library.jpg";
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <section className="home-container">

                <Tile
                    title="Wat we doen"
                    text="Bij Leesplezier melden ouders hun kinderen aan voor leessessies
                    met lees-liefhebbende vrijwilligers. Ben je een ouder die op zoek
                    is naar ondersteuning voor jouw kind of een vrijwilliger die zijn
                    passie wil delen? Laten we samen bouwen aan een wereld
                    vol leesplezier!"
                    children={<>
                        <Link className='home-link' to="/register">Doe mee!</Link>
                    </>
                    }
                    image={childrenInLibrary}
                    imgAlt="image of children in a library"
                >
                </Tile>

                <Tile
                    title="Wie we zijn"
                    text="Wij zijn Leesplezier, een platform dat zich toelegt op
                    het bevorderen van de liefde voor lezen en het verbeteren van de
                    geletterdheid van kinderen. Met toegewijde vrijwilligers bieden we leessessies aan,
                    inspireren en ondersteunen we kinderen op hun leesreis."
                    children={<>
                        <Link className='home-link' to="/the_project">Meer weten? </Link>

                    </>
                    }
                    image={readingTogether}
                    imgAlt="image of children in a library"
                >
                </Tile>
                <Tile
                    title="Voor ouders"
                    text="Verbeter de Nederlandse leesvaardigheid van je kind
                     door ze in te schrijven voor onze leessessies. Onze interactieve
                     sessies vergroten niet alleen leesvaardigheid, maar ook liefde
                      voor lezen. Geef je kind een voorsprong en laat ze de magie van
                      boeken ontdekken. Schrijf je vandaag in voor geweldige groei!"

                    children={<>
                            <Link className='home-link' to="/parents">Weten hoe? </Link>
                    </>
                    }
                    image={brightFuture}
                    imgAlt="image of children in a library"
                >
                </Tile>
                <Tile
                    title="Voor vrijwilligers"
                    text=" Wil jij een verschil maken in het leven van kinderen?
                    Sluit je aan als vrijwilliger en help mee om leesplezier te stimuleren!
                    Samen creëren we een warme omgeving waarin kinderen kunnen groeien en leren.
                    Doe mee en deel jouw liefde voor lezen."
                    children={<>
                        <Link className='home-link' to="/volunteers">Weten hoe? </Link>
                    </>
                    }
                    image={reading1}
                    imgAlt="image of children in a library"
                >
                </Tile>
                <Tile
                    title="Waar"
                    text="Bibliotheken zijn perfecte plekken voor leessessies met kinderen vanwege hun inspirerende sfeer en gevarieerde selectie boeken, terwijl deskundig personeel helpt bij materiaalkeuze. Tevens dienen bibliotheken als gemeenschapscentra waar kinderen gelijke toegang hebben tot leesplezier en educatie."
                    image={library}
                    imgAlt="a girl reading a book in a library."
                    children=
                        {
                            <p>Voor meer informatie:
                                <a href="https://www.bibliotheekutrecht.nl/klantenservice/vestigingen-openingstijden.html"
                                   title="Go to www.bibliotheekutrecht.nl"
                                   target="new">De Bibliotheek Utrecht</a>
                            </p>
                        }
                />
            </section>
        </>
    )
}

export default Home;