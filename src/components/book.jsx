import React from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"


function OneBook(props) {
    let {id} = useParams()
    let theBook = props.books[id]
    let author = theBook.volumeInfo.authors[0]
    let authorLink = author.replace(/\s+/g, "")

    return (
        <>
            <h1>{theBook.volumeInfo.title}</h1>
            <h3><Link to = {`/author/${authorLink}`}>{author}</Link></h3>
            <img src = {theBook.volumeInfo.imageLinks.thumbnail} className = "aBook" alt = "book cover"/>
            <p>published: {theBook.volumeInfo.publishedDate}</p>
            <p>{theBook.volumeInfo.description}</p>
        </>
    )
}

export default OneBook