import "./TheProject.css"
import readingTogether from '../../assets/images/reading-together.jpg';
import { FaBookReader } from "react-icons/fa";

function TheProject() {
    return (
        <>
            <section>
                <div className='project-origin'>
                    <h3 id="title-project">Wij zijn ontstaan vanuit één idee: <br/>  <i>"Lezen doen wij samen"</i> <br/><FaBookReader /></h3>

                    <p>In een wereld waarin woorden de sleutel zijn tot oneindige werelden van verbeelding en kennis,
                        begon het verhaal van LeesPlezier als een eenvoudig antwoord op een diepgeworteld verlangen: elk
                        kind de kans geven om te bloeien in de rijkdom van de Nederlandse taal, ongeacht hun
                        achtergrond.</p>
                    <p>Het begon allemaal met een groep toegewijde individuen die zich bewust werden van het feit dat
                        sommige kinderen, ondanks hun intelligentie en potentieel, moeite hebben met lezen en
                        taalvaardigheid. Deze moeilijkheden zijn vaak niet te wijten aan gebrek aan inzet of vermogen,
                        maar eerder aan een gebrek aan blootstelling aan de taal op een gevorderd niveau.</p>
                    <p>LeesPlezier werd geboren uit de wens om een verschil te maken in het leven van deze kinderen. Ons
                        doel is duidelijk: een platform bieden waar kinderen die de Nederlandse taal niet als moedertaal
                        hebben, of die hun leesvaardigheden willen verbeteren, samen kunnen komen met liefdevolle
                        vrijwilligers die hen willen helpen hun liefde voor lezen te ontdekken en te versterken.</p>
                    <p>De uitvoering is simpel maar krachtig: gedurende één uur per sessie worden kinderen gekoppeld aan
                        vrijwilligers die hen begeleiden in het ontdekken van de magie van boeken en verhalen. Deze
                        sessies worden niet alleen gezien als kansen om de leesvaardigheid van de kinderen te
                        verbeteren, maar ook als gelegenheden om vriendschappen te smeden, zelfvertrouwen op te bouwen
                        en een gevoel van trots te cultiveren in hun vooruitgang.</p>
                    <p>De eerste stappen van LeesPlezier waren bescheiden, maar al snel groeide het uit tot een
                        bloeiende gemeenschap van ouders, kinderen en vrijwilligers die allemaal geloven in de kracht
                        van lezen om levens te veranderen. Ouders, die soms worstelen om de Nederlandse taal volledig te
                        beheersen, vinden steun en geruststelling in het feit dat hun kinderen nu toegang hebben tot de
                        begeleiding en ondersteuning die ze nodig hebben om te gedijen.</p>
                    <p>Vrijwilligers van alle leeftijden en achtergronden worden aangetrokken door het idee om hun
                        liefde voor lezen te delen en een positieve impact te hebben op de levens van kinderen. Voor hen
                        is elke sessie een kans om niet alleen leesvaardigheid over te brengen, maar ook om een liefde
                        voor verhalen te inspireren die een leven lang meegaat.</p>
                    <p>En zo groeit LeesPlezier uit tot meer dan alleen een platform voor leesvaardigheid - het wordt
                        een symbool van hoop, inclusie en empowerment. Het is een herinnering aan de kracht van
                        gemeenschap en de eindeloze mogelijkheden die ontstaan wanneer mensen samenwerken in dienst van
                        een nobel doel.</p>
                </div>
                <span>
                    <img id="project-image" src={readingTogether} alt="picture of a lady reading with a child in a library"/>
                </span>


            </section>
        </>
    )
}

export default TheProject;
