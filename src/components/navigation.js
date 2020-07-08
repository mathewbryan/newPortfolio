import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
    return(
        <div className="navContainer">
            <nav className="navOptions">
                <Link to="/">Home </Link>
                <Link to="/about/">About Me </Link>
                <Link to="/gallery/">Gallery</Link>
                <Link to="/page-2/">Go to page 2</Link>
            </nav>
        </div>
    )
}

export default Navigation