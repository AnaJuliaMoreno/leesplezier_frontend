import "./TileInfo.css"

function TileInfo({icon, altText, title, text}) {
    return (
        <article className='tile-info'>
            <div className="tile-info-title">
                <img className='tile-info-icon' src={icon} alt={altText}/>
                <h3>{title}</h3>
            </div>
            <p>{text}</p>

        </article>

    );

}

export default TileInfo