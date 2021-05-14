import React from "react";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Worldwide Workers!</a>
        </nav>
    );
}

export default Navbar;