import React from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";

function OneBook(props) {
    let {id} = useParams()
    let theBook = props.books[id]
    let author = theBook.volumeInfo.authors
    console.log(author)
    let authorLink = author.replace(/\s+/g, "")

    return (
        <>
            <h1>{theBook.volumeInfo.title} by {theBook.volumeInfo.authors}</h1>
            <img src = {theBook.volumeInfo.imageLinks.thumbnail} alt = "{theBook.volumeInfo.title}"/>
            <p>published: {theBook.volumeInfo.publishedDate}</p>
            <p>{theBook.volumeInfo.description}</p>
        </>
    )
}

export default OneBook