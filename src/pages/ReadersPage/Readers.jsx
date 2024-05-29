import "./Readers.css";
import {children} from "../../../data/readers.json";
import ChildTile from "../../components/childTIle/ChildTile.jsx";


function Readers() {

    return (
        <section className="outer-content-container ">
            <h1>Children</h1>
            <div className="readers-page">
                {children.map(child => (
                    <ChildTile key={child.id}
                               name={child.name}
                               age={child.age}
                               selectedLocations={child.selectedLocations}
                               reading_focus={child.selectedReadingFocus}
                               availabilityList={child.availabilityList}
                    />
                ))}
            </div>
        </section>
    )
}
export default Readers;