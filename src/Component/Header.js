import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/topheaderphoto.jpeg'
import '../css/header.css'
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <img src={Image} className="img headerpic" alt="Cinque Terre"></img>
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link> </li>
                            <li> <Link to="/about"> About us </Link> </li>
                            <li> <Link to="/showMenu"> Menu </Link> </li>
                            <li> <Link to="/location"> Location/Contact Info </Link> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
)

export default Header