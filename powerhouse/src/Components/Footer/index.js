import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

function Footer(){
    return (
        <footer>

            <div className="footer">

                <div className="container">

                    <div className="row">

                        <div className="col-md-12 text-center">

                            <img src="images/logo2.png" className="img-fluid m-b--8" alt="logo-2"/>

                            <p className="spin m-b-12"><span> Get to know us better</span></p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br /> incididunt ut
                                labore et dolore magna aliqua.</p>

                            <a href="#"><i className="fab fa-google-plus-g" /></a>
                            <a href=""><i className="fab fa-facebook-f" /></a>
                            <a href=""><i className="fab fa-twitter" /></a>
                            <a href=""><i className="fab fa-behance" /></a>

                        </div>

                    </div>

                </div>

            </div>

            <div className="row">

                <div className="col-md-12 text-center next">

                    <p>&copy; 2013 <span>Your Company Name</span> All Right Reserved </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;