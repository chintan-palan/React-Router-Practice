import React from "react";

function Services(){
    let servicesList = [
        {
            icon: "images/col1.png",
            title: "Web Design",
            details: "Lorem ipsum dolor sit amet ne <br /> consectetur adipisicing elit sed<br /> eiusmod tempor incididunt<br />dolore magna aliqua.",
            link: "#"
        },
        {
            icon: "images/col2.png",
            title: "Photography",
            details: "Lorem ipsum dolor sit amet ne <br /> consectetur adipisicing elit sed<br /> eiusmod tempor incididunt<br />dolore magna aliqua.",
            link: "#"
        },
        {
            icon: "images/col3.png",
            title: "Seo Service",
            details: "Lorem ipsum dolor sit amet ne <br /> consectetur adipisicing elit sed<br /> eiusmod tempor incididunt<br />dolore magna aliqua.",
            link: "#"
        }
    ];
    return (
        <div className="services text-center">
            <div className="container">
                <div className="row">
                    {
                        servicesList.map(props => <SingleServiceSection {...props} />)
                    }
                </div>
            </div>
            <img src="images/energy2.png" className="bottom" />
        </div>
    );
}

function SingleServiceSection({ title, details, link, icon }){
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 new text-center">
            <img src={icon} className="img-fluid" alt="col-1" />
            <h2 dangerouslySetInnerHTML={{__html:title }}></h2>
            <p dangerouslySetInnerHTML={{__html:details }}></p>
            <a href={link}>+ read more</a>
        </div>
    );
}
export default Services;