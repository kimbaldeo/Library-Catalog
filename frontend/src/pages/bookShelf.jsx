import React from 'react';
import { data } from '../data';

function Bookshelf() {
       
    return (
        <>
        <h1>My Bookshelf</h1>
        <div className='shelf'>
        <div>
            { data.map((data, index) => {
                return (
                    <div key = {index}>
                        <img src = {data.volumeInfo.imageLinks.smallThumbnail} className = "allBooksCover" alt = "book cover"/>
                        <p>{data.volumeInfo.title}</p>
                    </div>
                )
                })
            }
        </div>
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