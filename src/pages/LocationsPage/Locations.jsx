import Tile from "../../components/tile/Tile.jsx";
import library from '../../assets/images/library.jpg';


function Locations() {
    return (
        <>
            <section className='inner-container'>
                <Tile
                    title="Locaties"
                    text="Bibliotheken zijn perfecte plekken voor leessessies met kinderen vanwege hun inspirerende sfeer en gevarieerde selectie boeken, terwijl deskundig personeel helpt bij materiaalkeuze en leesstrategieën. Tevens dienen bibliotheken als gemeenschapscentra waar kinderen samenkomen en hun liefde voor lezen delen, wat alle kinderen gelijke toegang geeft tot leesplezier en educatie."
                    image={library}
                    imgAlt="Picture of a child and an adult reading together."
                    children={<p>Voor meer informatie over de verschillende vestingen en openingstijden: </p>}
                    linkText="Bibliotheeken in Utrecht"
                    link="https://www.bibliotheekutrecht.nl/klantenservice/vestigingen-openingstijden.html"
                    linkTitle="Go to www.bibliotheekutrecht.nl"
                />
            </section>
        </>
    )
}

export default Locations

