import React from 'react';
import { Link } from "react-router-dom";

function Library(props) {
    return (
    <>
    <h1 className = "title">Title</h1>
    <div className = "booksDisplay">
        { props.books ? props.books.map((book, idx) => (
            <div key = {idx}>
                <Link to = {`/books/${idx}`}>
                    <img src = {book.volumeInfo.imageLinks.smallThumbnail} className = "allbookscover" />
                    <p>{book.volumeInfo.title}</p>
                </Link>
            </div>
        )): <h3>Loading...</h3>}
    </div>
    </>
    )
}

export default Library