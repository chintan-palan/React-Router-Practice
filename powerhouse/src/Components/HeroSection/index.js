import React, { Fragment } from "react";

function HeroSection(){
    return (
        <Fragment>
            <section>

                <h1>You admire your customers to your website</h1>

                <button type="button" className="btn bts">Show More</button>

            </section>


            <div className="banner">

                <div className="container">

                    <div className="row">

                        <div className="col-md-12 comp text-center">

                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">

                                <ol className="carousel-indicators sink">
                                    <li data-target="#carouselExampleFade" data-slide-to="0" className="active" />
                                    <li data-target="#carouselExampleFade" data-slide-to="1"/>
                                    <li data-target="#carouselExampleFade" data-slide-to="2"/>
                                    <li data-target="#carouselExampleFade" data-slide-to="3"/>
                                </ol>

                                <div className="carousel-inner temp">

                                    <div className="carousel-item active">

                                        <img src="images/col.jpg" className="d-block w-100 img-fluid" alt="img-1" />

                                    </div>

                                    <div className="carousel-item">

                                        <img src="images/col.jpg" className="d-block w-100 img-fluid" alt="img-1" />

                                    </div>

                                    <div className="carousel-item">

                                        <img src="images/col.jpg" className="d-block w-100 img-fluid" alt="img-1" />

                                    </div>

                                    <div className="carousel-item">

                                        <img src="images/col.jpg" className="d-block w-100 img-fluid" alt="img-1" />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </Fragment>
    );
}

export default HeroSection;