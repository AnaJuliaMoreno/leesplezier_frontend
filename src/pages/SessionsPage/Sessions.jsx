import './Sessions.css'
import {sessions} from "../../../data/sessionsData.json"
import {locations} from "../../constants/locations.js"
import formatDate from "../../helpers/formatDate.js";
import timeNl from "../../helpers/timeNL.js";






function Sessions() {

     const currentDate = new Date ();
     currentDate.setHours(0,0,0,0)

    const futureSessions = sessions.filter(post => {
        const sessionDate = new Date(post.schedule.date);
        sessionDate.setHours(0, 0, 0, 0);
        return sessionDate >= currentDate;
    });

    return (
        <> <h1>Berichten</h1>
            <section className="tiles-container">


                {futureSessions.map(post => {
                    // Find the location object with matching id
                    const location = locations.find(location => location.id === post.location);
                    // If location is found, display its name, otherwise display "Unknown Location"
                    const locationName = location ? location.name : "Unknown Location";

                    return (
                        <div className="post-it sessions-page" key={post.id}>
                            <p >
                                Ik ben <b>{post.userName}</b> en wil graag uitnodigen om deel
                                te nemen aan een leessessie aan de
                                bibliotheek <b>{locationName}</b> om <b>{formatDate(post.schedule.date)}</b> op {timeNl(post.schedule.time)}
                            </p>

                            <p>
                                <br/>
                                <i>"{post.comment}"</i>
                            </p>

                        </div>
                    );
                })}


            </section>
        </>
    )
}

export default Sessions