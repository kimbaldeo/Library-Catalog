import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    <>
    <div className = "nav">
        <Link to = "/">
            Main
        </Link>
        <Link to = "/shelf">
            My Books
        </Link>
    </div>
    <header>
        <h1>Book Nook</h1>
    </header>
    </>
}

export default Nav 