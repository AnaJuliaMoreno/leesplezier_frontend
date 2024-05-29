import "./Tile.css"

function Tile({title, text, image, imgAlt, children}) {

    return (
        <article className="tile">
            <div className="tile-text">
                <h3 className="tile-title">{title}</h3>
                <img id="tile-image" src={image} alt={imgAlt}/>
                <p>{text}</p>
                <div>{children} </div>


            </div>

        </article>
    );
}


export default Tile;