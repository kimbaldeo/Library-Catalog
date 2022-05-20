import React from 'react';
function Bookshelf() {
    return (
        <>
        <h1>My Bookshelf</h1>
        <div className = "bookView">
            <
        </div>

        </>
        // (props.books.map((book, idx) => (
        //     <div key = { idx } className = "bookView">
        //         <Link to = {`/shelf/${idx}`}>
        //             <img src = {book.volumeInfo.imageLinks.smallThumbnail} className = "allbookscover" alt = "book cover"/>
        //             <p>{book.volumeInfo.title}</p>
        //         </Link>
        //     </div>
        // ))
        // ) : (<div>Loading...</div>)
    )
}

export default Bookshelf