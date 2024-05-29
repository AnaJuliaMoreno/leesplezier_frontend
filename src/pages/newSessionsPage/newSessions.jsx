import './newSessions.css'
import {useForm} from "react-hook-form";
import {locations} from "../../constants/locations.js";
import formatDate from "../../helpers/formatDate.js";
import blockWeekends from "../../helpers/blockWeekends.js";
import {useContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import timeNl from "../../helpers/timeNL.js";
import {AuthContext} from "../../context/AuthContext.jsx";


// install a json server locally, in terminal:   npm i json-server
// json-server --watch data/sessions.json --port 8000



function NewSessions() {
    const {user} = useContext(AuthContext);
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues: {
            username: '',
            volunteersName: '',
            locationName: '',
            startTime: '',
            sessionDate: '',
            comment: ''
        }
    });

    const watchedFields = watch(['volunteersName', 'locationName', 'sessionDate', 'startTime', 'comment']);
    const [error, toggleError] = useState(false);

    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    async function submitNewPost(data) {
        toggleError(false)

        try {
            // Append the new object data with the username
            const newSession = {...data};
            newSession.username = user.username

            // Write the updated JSON data back to the file
            await axios.post("http://localhost:8080/sessions/create", newSession);

            // console.log("Data submitted:", newSession);
            setSubmitted(true)


        } catch (error) {
            if (axios.isCancel(error)) {
                console.error('Request cancelled to avoid a memory leak')
            } else {
                console.error(error);
            }
            toggleError(true)
        }
    }

    function handleReaders() {
        navigate("/readers");
    }

    function handlePosts() {
        navigate("/sessions")
    }

    return (
        <section>

            {!submitted ?
                <div className="session-tiles-container">
                    <h2>Leessessie aangeven</h2>
                    <p>Op moment dat jij op submit drukt dan komt je bericht op het prikbord te staan, zodat de lezers
                        weten
                        waar ze naartoe moeten.
                    </p>

                    <form className="post-form-tiles" onSubmit={handleSubmit(submitNewPost)}>
                        <h3>Invullen</h3>

                        <label>Vrijwilligers naam:
                            <input autoComplete='off'
                                   {...register("volunteersName", {
                                       required: "Dit veld is verplicht"
                                       , minLength: {
                                           value: 3,
                                           message: "Minimale naamlengte is 3 letters"
                                       }
                                   })}
                            />
                        </label>
                        <span>{errors.volunteersName?.message}</span>


                        <label>Datum:
                            <input type="date"
                                   {...register("sessionDate", {
                                       required: "Dit veld is verplicht",
                                       min: {
                                           value: new Date().toISOString().split('T')[0],
                                           message: "Ongeldige datum"
                                       }
                                   })}
                                   onInput={blockWeekends}/>
                        </label>
                        {errors.sessiontDate && <span>{errors.sessionDate.message}</span>}


                        <label>Tijd:
                            <input type="time"
                                   {...register("startTime", {
                                       required: "Dit veld is verplicht",
                                       min: {
                                           value: '12:00',
                                           message: 'kies een starttijd tussen 12.00 en 17.00 uur',
                                       },
                                       max: {
                                           value: "17:00",
                                           message: 'kies een starttijd tussen 12.00 en 17.00 uur'
                                       }
                                   })} />

                        </label>
                        {errors.startTime && <span>{errors.startTime.message}</span>}


                        <label>Locatie:
                            <select
                                onChange={(data) => data.target.value}
                                {...register("locationName",
                                    {required: "Dit veld is verplicht"}
                                )}>
                                {locations.map((location) => (
                                    <option key={location.id} value={location.name}>
                                        {location.name}
                                    </option>
                                ))}
                            </select>

                        </label>
                        <span>{errors.locationName?.message}</span>


                        <label> Persoonlijke boodschap:
                            <textarea className="personal-message"
                                      placeholder="Voorbeld: Laten we samen nieuwe avonturen beleven met onze favoriete boeken!"
                                      {...register("comment", {
                                          required: false
                                      })} />
                        </label>
                        <span>{errors.comment?.message}</span>

                        <button type="submit">Submit</button>
                    </form>

                    <div className="post-form-tiles result-tile">
                        <h3>Dit is jouw bericht</h3>
                        <div className="post-it">

                            <p>Hoi lieve lezers! </p>
                            <br/>
                            <p> Ik ben <i>{watchedFields[0] || "jouw naam"}</i> en wil je graag uitnodigen om
                                deel te nemen aan een leessessie in de
                                bibliotheek <i>{watchedFields[1]} </i>op <i>{watchedFields[2] ? formatDate(watchedFields[2]) :
                                    "datum"}</i> om <i>{watchedFields[3] ? timeNl(watchedFields[3]) : "tijd"}</i>.</p>
                            <br/>
                            <p>{watchedFields[4] || <i>Jouw persoonlijke boodschap</i>}</p>
                        </div>
                    </div>
                </div>

                :
                <div className="success-message">
                    <h2 id="placed-post">Je bericht is geplaatst! </h2>

                    <button onClick={handleReaders}>Wil je naar onze lezers toe?</button>
                    <button onClick={handlePosts}> Wil je alle berichten zien?</button>
                </div>
            }

        </section>
    );
}

export default NewSessions;