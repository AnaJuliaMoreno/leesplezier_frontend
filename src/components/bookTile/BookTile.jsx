import "./BookTile.css"

function BookTile({title, author, cover_edition_key}) {

    return (
        <div className="book-border">
            <a className="book-tiles" href={`https://openlibrary.org/books/${cover_edition_key}`}>
                <li><strong>Title: </strong> {title} </li>
                <li><strong>Author: </strong> {author} </li>
                <img src={`https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`}
                     alt={`cover of ${title}`}/>
            </a>
        </div>
    );
}

export default BookTile;