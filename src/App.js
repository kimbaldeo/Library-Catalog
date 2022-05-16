import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Library from './components/allBooks.jsx';


const apiKey = "AIzaSyD4kThBPA1wo2angCo7gexUr26dfwls_CE"
const googleBooks = `https://books.googleapis.com/books/v1/volumes?q=%22%22&printType=BOOKS&key=${apiKey}`

function App() { 
  const [books, setBooks] = useState("")

  function getBooks() {
      fetch(googleBooks)
      .then((res) => {res.json()
      })
      .then((res) => {setBooks(res.items)
      })
  }

  useEffect(() => {
      getBooks()
  }, [])


  return (
    <div className="App">
      <h1>Name</h1>
      <Routes>
        <Route path = "/" element = {<Library books = {books} />} />
        <Route path = "/idx" element = {<aBook />} />
      </Routes>

    </div>
  );
}

export default App;
