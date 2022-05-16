import {Link} from "react-router-dom";

function Library(props) {

    return (
        <>
        { props.books ? props.books.map((books, idx) => (
            <div key = {idx}>
                <Link to = {`/${idx}`}>
                    <h1>Test</h1>
                    <h3>{books.title}</h3>
                </Link>
            </div>
        )): <h3>Loading...</h3>}
        </>
    )
}

export default Library