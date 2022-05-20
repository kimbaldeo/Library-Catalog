import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    
    return (
    <>
        <div className = "nav">
            <div className = "Links">
                <Link to = "/" className = "navMain">
                    Main
                </Link>   
                <Link to = "/shelf" className = "navShelf">
                    My Books
                </Link>
            </div>
            <span className = "searchBar">
                <form onSubmit = {props.doSearch}>
                    <input type = "text" onChange = {props.handleChange} value = {props.query} className = "searchField"/>   <button className = "searchButton">Find</button>
                </form>
            </span>
        </div>
        </>
    )
}

export default Nav 