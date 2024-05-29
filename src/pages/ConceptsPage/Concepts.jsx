import './Concepts.css'
import TileInfo from "../../components/tileInfo/TileInfo.jsx";
import fluency from "../../assets/images/fast-forward.svg";
import list from '../../assets/images/list.svg';
import decode from '../../assets/images/qrcode.svg';
import phonetics from '../../assets/images/puzzlePiece.svg';
import comprehension from "../../assets/images/check.svg"
import memory from "../../assets/images/cloud-arrow-down.svg"
import {readingFocus} from "../../constants/readingFocus.js";

function Concepts() {
    return (
        <>
            <section className="inner-container">
                <div className="concepts">
                    <h2 id="title">Aandachtsgebieden </h2>
                    <p>
                        Het is van essentieel belang om voor een leessessie bekend te zijn met deze bouwstenen van
                        effectief
                        lezen en
                        begrip van geschreven tekst. Door vertrouwd te zijn met deze concepten kunnen kinderen woorden
                        snel herkennen, begrijpen en correct uitspreken. Dit bevordert niet alleen de leessnelheid, maar
                        ook het begrip van de tekst. Het vermogen om de betekenis van woorden en zinnen te integreren
                        tot een coherent begrip van de tekst, samen met het vermogen om informatie op te nemen en vast
                        te houden tijdens het lezen, zijn essentiële vaardigheden voor succesvolle leessessies.
                        <br/>
                        <em>Deze concepten helpen je bij het identificeren van probleemgebieden bij het lezen, zodat
                            je gerichter kunt oefenen en de benodigde leesvaardigheid sneller kunt verbeteren.</em></p>

                    <TileInfo
                        icon={fluency}
                        altText="fast forward icon"
                        title={readingFocus[0].name}
                        text={readingFocus[0].description}>
                    </TileInfo>

                    <TileInfo
                        icon={list}
                        altText="icon of a list"
                        title={readingFocus[1].name}
                        text={readingFocus[1].description}>
                    </TileInfo>

                    <TileInfo
                        icon={decode}
                        altText="icon of a qr code"
                        title={readingFocus[2].name}
                        text={readingFocus[2].description}>
                    </TileInfo>

                    <TileInfo
                        icon={phonetics}
                        altText="icon of a puzzle piece"
                        title={readingFocus[3].name}
                        text={readingFocus[3].description}>
                    </TileInfo>

                    <TileInfo
                        icon={comprehension}
                        altText="icon of a check badge"
                        title={readingFocus[4].name}
                        text={readingFocus[4].description}>
                    </TileInfo>

                    <TileInfo
                        icon={memory}
                        altText="icon a cloud with an arrow down inside"
                        title={readingFocus[5].name}
                        text={readingFocus[5].description}>
                    </TileInfo>
                </div>
            </section>
        </>
    )
        ;
}

export default Concepts;