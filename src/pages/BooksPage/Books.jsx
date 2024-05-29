import "./Books.css"
import axios from "axios";

import {useEffect, useState} from "react";
import Button from "../../components/button/Button.jsx";
import BookTile from "../../components/bookTile/BookTile.jsx";


function Books() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const controller = new AbortController();
useEffect (()=>{

 void handleSearch()
    return function cleanup(){
    controller.abort();
    }
}, [])

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    async function handleSearch() {
        toggleLoading(true)
        toggleError(false)

        if (query.trim() !== '')
        try {

           const checkedQuery = query.trim().toLowerCase();
            const response = await axios.get(
                `https://openlibrary.org/subjects/${checkedQuery}.json`, {signal: controller.signal,});
            
            setResults(response.data.works);
            //console.log(response)
        } catch (e) {
            if(axios.isCancel(e)){
                console.error('Request cancelled to avoid a memory leak')
            } else {
                console.error(e);
            }
            toggleError(true)

        //ipv toggleError : setError(e.response.status)
        }
            toggleLoading(false)
    }

    return (

        <section>

            <div className="bookImage">
                <h2>Ben jij opzoek naar lees inspiratie? </h2>
                <h4>Hier kan jij boeken per onderwerp vinden: </h4>

                {error ? <p>Er is iets mis gegaan, probeer later op nieuw. </p> :

                    <>
                        <input id='subject'
                               type="search"
                               value={query}
                               onChange={handleChange}
                               placeholder="jouw onderwerp"
                        />

                        <Button buttonType="submit" buttonVariant="search"
                                clickHandler={handleSearch}
                                buttonText="Inspereer mij"
                        />
                    </>
                }
                {loading ? <h3> 🎉 loading wonderful possibilities... 🎉</h3> :
                <ul id="book-list">
                    {results.map((book) => (
                        <BookTile
                            key={book.key}
                            title={book.title}
                            author={book["authors"][0].name}
                            cover_edition_key={book.cover_edition_key}/>
                    ))}
                </ul>
                }
            </div>
        </section>

    );
}

export default Books;