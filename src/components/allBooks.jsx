import React from 'react';
import { Link } from "react-router-dom";

function Library(props) {
    return (
    <>
        { props.books ? props.books.map((book, idx) => (
            <div key = {idx}>
                <Link to = {`/books/${idx}`}>
                    <h3>{book.volumeInfo.title}</h3>
                </Link>
            </div>
        )): <h3>Loading...</h3>}
    </>
    )
}

export default Library