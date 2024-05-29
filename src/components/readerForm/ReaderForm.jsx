import './ReadersForm.css'
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {locations} from "../../constants/locations.js";
import {readingFocus} from "../../constants/readingFocus.js";
import {useNavigate} from "react-router-dom";
import {MdDelete} from "react-icons/md";
import axios from "axios";


function ReaderForm() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            age: 5,
            focusList: [],
            availabilityList: [],
            locationsList: []
        }
    });

    const navigate = useNavigate();
    const [locationsList, setLocationsList] = useState([]);
    const [availabilityList, setAvailabilityList] = useState([]);
    const [focusList, setFocusList] = useState([]);
    const [error, toggleError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleAvailabilityChange = (index, field, value) => {
        const updatedAvailability = [...availabilityList];
        updatedAvailability[index][field] = value;
        setAvailabilityList(updatedAvailability);
    };

    useEffect(() => {
            addAvailability();
        },
        []);


    const addAvailability = () => {
        setAvailabilityList([
            ...availabilityList, {
                startAt: "",
                day: ""
            }
        ])
    }
    const removeAvailability = (index) => {
        setAvailabilityList(availabilityList.filter((_, idx) => idx !== index));
    };

    const handleLocSelect = (locationName) => {
        if (locationsList.includes(locationName)) {
            setLocationsList(locationsList.filter(location => location !== locationName));
        } else {
            setLocationsList([...locationsList, locationName]);
        }
    };
    const handleRFSelect = (name) => {
        if (focusList.includes(name)) {
            setFocusList(focusList.filter(readingFocus => readingFocus !== name));
        } else {
            setFocusList([...focusList, name]);
        }
    };

    async function onSubmit(data) {

        //console.log("data", data)
        toggleError(false)
        try {
            const newReader = {
                ...data,
                availabilityList,
                locationsList,
                focusList
            };
            await axios.post("http://localhost:8080/children/create", newReader)
           // console.log("Data submitted successfully:", newReader);
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
    function handleSessions() {
        navigate("/sessions");
    }

    function handleReaderRegister() {
        navigate("/readers-register")
    }

    return (
        <section>

            <h2>Lezer</h2>
            {!submitted ?
                <form className="readers-form" onSubmit={handleSubmit(onSubmit)}>


                    <div>
                        <label htmlFor="details-name">Naam:
                            <input type="text"
                                   autoComplete="given-name"
                                   id="details-name"
                                   {...register("name", {
                                       required: "Dit veld is verplicht"
                                       , minLength: {
                                           value: 3,
                                           message: "Minimale naamlengte is 3 letters"
                                       }
                                   })}/>
                            <span className="error">{errors.name?.message}</span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="details-age">Leeftijd: </label>
                        <input type="number" id="details-age" {...register("age", {
                            min: "5",
                            max: "12",
                            required: true
                        })} />
                    </div>

                    <div>
                        <label>Kies jouw beschikbaarheid:
                            {availabilityList.map((availability, index) => (
                                <div key={index}>

                                    <select
                                        value={availability.day_of_week}
                                        id={`details-availabilityList-day-${index}`}
                                        {...register(`availabilityList.${index}.day`, {required: "Dit veld is verplicht"})}
                                        onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)}
                                    >
                                        <option value="">Kies een dag</option>
                                        <option value="monday">maandag</option>
                                        <option value="tuesday">dinsdag</option>
                                        <option value="wednesday">woensdag</option>
                                        <option value="thursday">donderdag</option>
                                        <option value="friday">vrijdag</option>
                                    </select>
                                    {errors.availabilityList?.[index]?.day && <span>{errors.availabilityList[index].day.message}</span>}
                                    <select
                                        value={availability.startAt}
                                        id={`details-availabilityList-time-${index}`}
                                        {...register(`availabilityList.${index}.startAt`, {required: "Dit veld is verplicht"})}
                                        onChange={(e) => handleAvailabilityChange(index, 'startAt', e.target.value)}
                                    >
                                        <option value="">Kies een tijd</option>
                                        <option value="12:00">12:00</option>
                                        <option value="12:30">12:30</option>
                                        <option value="13:00">13:00</option>
                                        <option value="13:30">13:30</option>
                                        <option value="14:00">14:00</option>
                                        <option value="14:30">14:30</option>
                                        <option value="15:00">15:00</option>
                                        <option value="15:30">15:30</option>
                                        <option value="16:00">16:00</option>
                                        <option value="16:30">16:30</option>
                                        <option value="17:00">17:00</option>

                                    </select>
                                    {errors.availabilityList?.[index]?.startAt && <span>{errors.availabilityList[index].startAt.message}</span>}
                                    {index === availabilityList.length - 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeAvailability(index)}
                                        >
                                            <MdDelete/>
                                        </button>
                                    )}
                                </div>


                            ))}

                            <button onClick={addAvailability}>beschikbaarheid toevoegen</button>
                        </label>
                    </div>


                    <div>
                        <legend>Kies één of meerdere locaties:</legend>

                        {locations.map((location) => (
                            <label key={location.id} className="list-items">

                                <input className="items"
                                       multiple
                                       type="checkbox"
                                       value={location.name}
                                       {...register("locationsList", {required: true, minLength: 1})}
                                       onChange={() => handleLocSelect(location.name)}
                                       checked={locationsList.includes(location.name)}
                                />
                                {location.name}

                            </label>

                        ))}
                        {errors.locationsList && <span className="error">
                    Kies ten minste één locatie</span>}
                    </div>
                    <div>

                        <legend>Kies één of meerdere aandacht velden:</legend>

                        {readingFocus.map((focus) => (
                            <label key={focus.id} className="list-items">

                                <input className="items"
                                       multiple
                                       type="checkbox"
                                       value={focus.name}
                                       {...register("focusList", {required: true, minLength: 1})}
                                       onChange={() => handleRFSelect(focus.name)}
                                       checked={focusList.includes(focus.name)}

                                />
                                {focus.name}
                                <div className="tool-tip"><sup>&#x1F6C8; </sup>
                                    <span className="tool-tip-text">{focus.info}</span>
                                </div>
                            </label>

                        ))}
                        {errors.focusList && <span className="error">
                    Kies ten minste één veld</span>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
                :
                <div className="success-message">
                    <h2 id="placed-post">Je bericht is geplaatst! </h2>

                    <button onClick={handleSessions}>Welke sessies beschikbaar zijn?</button>
                    <button onClick={handleReaderRegister}> Wil je nog een lezer toevoegen?</button>
                </div>
            }
        </section>
    );
}

export default ReaderForm;