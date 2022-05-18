import './App.css';
import config from './config.json';
import React from 'react';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import Library from './components/allBooks';
import OneBook from './components/book';
import Author from './components/author'

/* Steps to setup backend?
  - Setup Express
  - On App Start set connection to MongoDB
  - Have listener to getBooks() on initial route (i.e. localhost:3000/)
  - Have getBooks() check for books in the DB first - if no books found within the range (i.e. startIndex) before your fetch of the Google Books API, then fetch from Google Books API
  - store results from Google Books API into MongoDB
*/

let startIndex = 0
const fetchVolumesURL = `https://books.googleapis.com/books/v1/volumes?q=""&maxResults=40&langRestrict=english&orderBy=newest&printType=BOOKS&startIndex=${startIndex}&key=${config.apiKey}`

function App() { 
  const [books, setBooks] = useState("")

  function getBooks() {
      const url = fetchVolumesURL;
      fetch(url)
      .then((res) =>  res.json())
      .then((res) =>  setBooks(shuffle(res.items)))
  }

  useEffect(() => {
      getBooks()
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Library books = {books} />} />
        <Route path = "/books/:id" element = {<OneBook books = {books} />} />
        <Route path = "/author/:author" element = {<Author books = {books} />} />
      </Routes>
    </div>
  );
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default App;
