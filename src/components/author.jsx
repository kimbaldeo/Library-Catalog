import React, { useEffect } from 'react';
import config from './../config.json';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';


function Author() {
    let { authorName } = useParams()

    const fetchURL = `https://books.googleapis.com/books/v1/volumes?q=inauthor:${authorName}&maxResults=40&orderBy=relevance&printType=BOOKS&key=${config.apiKey}`

    const [books, setBooks] = useState([])

    function getBooks() {
        fetch(fetchURL)
        .then((res) => res.json())
        .then((res) => (setBooks(res.items)))
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
            <h1>{authorName}</h1>
            { books ? books.map((book, idx) => (
                <div key = {idx}>
                    <Link to = {`/${idx}`}>
                        <h3>{book.volumeInfo.title}</h3>
                    </Link>
                </div>
            )) : <h2>Loading...</h2>}
        </>
    )
}

export default Author