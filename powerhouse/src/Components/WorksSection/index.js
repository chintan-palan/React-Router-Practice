import React from "react";

function WorksSection(){
    return (
        <div className="recent-work">

            <div className="container">

                <div className="row">

                    <div className="col-md-12 works all text-center">

                        <h2>recent works</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br /> incididunt ut
                            labore et dolore magna aliqua.</p>

                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 works text-center">

                        <img src="images/work.jpg" className="img-fluid" alt="work-1" />

                        <h3>Amazing Spider Man Manipulation</h3>

                        <p><i className="fas fa-tag stag" />Web Design, UI/UX, Visual Effects</p>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 works text-center">

                        <img src="images/work.jpg" className="img-fluid" alt="work-1" />

                        <h3>Responsive Corporate Web Design</h3>

                        <p><i className="fas fa-tag stag" />Web Design, UI/UX, Visual Effects</p>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 works text-center">

                        <img src="images/work.jpg" className="img-fluid" alt="work-1" />

                        <h3>Graphic & Web Interface Design</h3>

                        <p><i className="fas fa-tag stag" />Web Design, UI/UX, Visual Effects</p>

                    </div>

                </div>

                <div className="row">

                    <div className="col-md-12 text-center">

                        <div className="bdr">

                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="col-md-12 text-center">

                        <button type="button" className="btn bts">Show More</button>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default WorksSection;