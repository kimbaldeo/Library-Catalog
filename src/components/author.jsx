import React, { useEffect } from 'react';
import config from './../config.json';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';


function Author() {
    let { authorName } = useParams()

    let authorDisplay = (authorName.replace(/\s+/g, '+'))
    const fetchURL = `https://books.googleapis.com/books/v1/volumes?q=inauthor:${authorDisplay}&langRestrict=english&orderBy=relevance&printType=BOOKS&key=${config.apiKey}`

    const [author, setAuthor] = useState([])

    function getAuthor() {
        fetch(fetchURL)
        .then((res) => res.json())
        .then((res) => (res.items))
    }

    useEffect(() => {
        getAuthor()
    }, [])

    return (
        <>
            { author ? author.map((author, idx) => (
                <div key = {idx}>
                    <Link to = {`/${idx}`}>
                        <img src = {author.volumeInfo.imageLinks.smallThumbnail} className = "allbookscover" alt = "book cover"/> 
                        <h3>{author.title}</h3>
                    </Link>
                </div>
            )) : <h2>Loading...</h2>}
        </>
    )
}

export default Author