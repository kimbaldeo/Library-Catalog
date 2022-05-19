import React from "react"
import { useParams } from "react-router"

function Results() {

    let search = useParams()

    const fetchURL = `https://books.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&langRestrict=en&orderBy=relevance&printType=BOOKS&key=${config.apiKey}`
    
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

export default Results