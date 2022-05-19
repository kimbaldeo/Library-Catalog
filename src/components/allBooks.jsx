import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

function Library(props) {
    return (
    <>
    <div className = "booksDisplay">
    { props.isLoaded ? 
        (
            props.books.map((book, idx) => (
                <div key = { idx }>
                    <Link to = {`/books/${idx}`}>
                        <img src = {book.volumeInfo.imageLinks.smallThumbnail} className = "allbookscover" alt = "book cover"/>
                        <p>{book.volumeInfo.title}</p>
                    </Link>
                </div>
            ))
        ) : (<div>Test</div>)
    }

    { props.isLoaded ?
        (
            <ReactPaginate
                pageCount={props.pageCount}
                pageRange={2}
                marginPagesDisplayed={2}
                onPageChange={props.handlePageChange}
                containerClassName={'container'}
                previousLinkClassName={'page'}
                breakClassName={'page'}
                nextLinkClassName={'page'}
                pageClassName={'page'}
                disabledClassNae={'disabled'}
                activeClassName={'active'}
            />
        ) : (<div>Test</div>)
    }
    </div>
    </>
    )
}

export default Library