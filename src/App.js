import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import Library from './components/allBooks';
import config from './config.json';

const fetchVolumesURL = `https://books.googleapis.com/books/v1/volumes?q=""&printType=books&orderBy=newest&maxResults=40&key=${config.apiKey}`
let startIndex = 80

function App() { 
  const [books, setBooks] = useState("")

  function getBooks() {
      const url = fetchVolumesURL + `&startIndex=${startIndex}`;
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
