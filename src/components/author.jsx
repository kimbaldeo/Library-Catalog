// import config from './config.json';
import React from 'react';

function Author(props) {
//     const fetchAuthorURL = `https://books.googleapis.com/books/v1/volumes?q=""&orderBy=relevance&printType=BOOKS&key=${config.apiKey}`
//     const [author, setAuthor] = useState("")

//     function getAuthor() {
//         const url = fetchAuthorURL;
//         fetch(url)
//         .then((res) =>  res.json())
//         .then((res) =>  setBooks((res.items)))
//     }

//     useEffect(() => {
//         getAuthor()
//     }, [])

    // let {id} = useParams()
    // let theAuthor = props.books.[id]

    return (
        <p>testing</p>
        // { props.books ? props.books.map((book, idx) => (
        //     <div key = {idx}>
        //         <Link to = {`/${idx}`}>
        //             <h3>{book.volumeInfo.title}</h3>
        //         </Link>
        //     </div>
        // )): <h3>Loading...</h3>}
    )
}

export default Author