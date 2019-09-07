import React from "react";

function LatestBlogsSection() {
    return (
        <div className="services service">

            <div className="container">

                <div className="row">

                    <div className="col-md-12 works all text-center">

                        <h2>latest blog posts</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br /> incididunt ut
                            labore et dolore magna aliqua.</p>

                    </div>

                </div>

                <div className="row m-b-50">

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">

                        <div className="img-thumb">

                            <img src="images/blog1.jpg" className="img-fluid" alt="blog-1" />

                            <div className="overlay">

                                <span>21 <br />june</span>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">

                        <div className="row first">

                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 rest">

                                <div className="img-thumb">

                                    <img src="images/blog2.jpg" className="img-fluid" alt="blog2" />

                                    <div className="overlay-text">

                                        <span>19<br /> june</span>

                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 col-md-8 col-sm-8 col-12 let">

                                <h2>Cipisicing Elit Sed Do Eiusmod Tempor</h2>

                                <p className="mb-1"><span>WEB DESIGN  /  POSTED BY ADMIN  /  15 COMMENTS</span></p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>

                                <a href="#">+ read more</a>

                            </div>

                        </div>

                        <div className="row sec">

                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 let">

                                <div className="img-thumb">

                                    <img src="images/blog2.jpg" className="img-fluid mb-0" alt="blog2" />

                                    <div className="overlay-text">

                                        <span>18 <br /> june</span>

                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 col-md-8 col-sm-8 col-12 let">

                                <h2>Cipisicing Elit Sed Do Eiusmod Tempor</h2>

                                <p className="mb-1"><span>WEB DESIGN  /  POSTED BY ADMIN  /  15 COMMENTS</span></p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>

                                <a href="#">+ read more</a>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 let">

                        <h2>Cipisicing Elit Sed Do Eiusmod Tempor</h2>

                        <p className="mb-3"><span>WEB DESIGN  /  POSTED BY ADMIN  /  15 COMMENTS</span></p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna.Lorem ipsum iso dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>

                        <a href="#">+ read more</a>

                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center entry">

                        <p>Click here to read all blog enteries</p>

                        <button type="button" className="btn bts">Show More</button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default LatestBlogsSection;