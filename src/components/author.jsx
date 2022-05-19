import React from 'react';
import { Link, useParams } from "react-router-dom";

function Author(props) {
    let { author } = useParams()
    return (
        <>
            { props.books ? 
            ( props.books.map((book, idx) => (
                book.volumeInfo.authors.map((authorInArray) => authorInArray.replace(/\s+/g, "")).includes(author) ?
                    (
                    <div key = {idx}>
                        <h1>More by {book.volumeInfo.authors}</h1>
                        <Link to = {`/books/${idx}`}>
                            <h3>{book.volumeInfo.title}</h3>
                        </Link>
                    </div>
                    ) : 
                    (
                    <div></div> 
                    )
                ))
            ) : <h3>Loading...</h3>}
        </>
    )
}

export default Author