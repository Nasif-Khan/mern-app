import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fa-solid fa-book-open-reader">MERN</i></Link>
            </h1>
            <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;