import React, { useEffect } from 'react';
import config from './../config.json';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';


function Author() {
    // let { author } = useParams()

    let authorDisplay = "maas"
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
        <h4>{author.volumeInfo}</h4>
        </>
    )
}

export default Author