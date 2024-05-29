import './ChildTile.css'
import translateDay from "../../helpers/translateDay.js";
import timeNl from "../../helpers/timeNL.js";


//border colors for className in article
const colors = ['orange', 'green', 'purple', 'yellow'];

function ChildTile({name, age, selectedLocations, availabilityList, reading_focus}) {



// To randomly choose a color for the child tile.
    let previousColor = '';
    const getRandomColor = () => {
        let randomColor;
        do {
            randomColor = colors[Math.floor(Math.random() * colors.length)];
        } while (randomColor === previousColor);
        previousColor = randomColor;

        return randomColor;
    };
    const color = getRandomColor()


    return (
        <article className={`child-tiles tile-border-${color}`}>

            <h3 id="child_tile_title">{name} {age}</h3>
            <div>
                <ul> Beschikbaarheid:
                    {availabilityList.map((availability, index) => (
                        <li key={index}>
                            {translateDay(availability.day_of_week).charAt(0).toUpperCase() + translateDay(availability.day_of_week).slice(1) } om {timeNl(availability.start_at)}.
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul> Geselecteerde locaties:
                    <li>{selectedLocations.join(', ')}</li></ul>
            </div>

            <div>
                <ul> Aandachtspunten:
                    <li> {reading_focus.join(', ')}</li>
                </ul>
            </div>

        </article>

       );
}

export default ChildTile;
