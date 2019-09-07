import React from "react";
import { NavLink } from "react-router-dom";

function Index() {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">

                    <a className="navbar-brand" href="#"><img src="images/logo.png" alt="logo" /></a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-expanded="false">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/" exact>Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/features">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">SERVICES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolio">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">CONTACT US</NavLink>
                            </li>

                        </ul>

                    </div>

                </nav>

            </div>

        </header>
    );
}


export default Index;