import './SmallTile.css'
import {Link} from "react-router-dom";

function SmallTile({internalLink, text, title }){


    const scrollToTop = () => {
        window.scrollTo({
            top: 100,
            behavior: "smooth"
        })
    }
    return(
        <div onClick={scrollToTop} className='sTile-border'>
            <Link className='sTiles' to={internalLink}>
                <h3>{title}</h3>
                <p>{text}</p>
            </Link>
        </div>
    );
}

export default SmallTile