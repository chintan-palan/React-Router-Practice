import React, { Fragment } from "react";
import HeroSection from "../../Components/HeroSection/";
import ServicesSection from "../../Components/Services/";
import WorksSection from "../../Components/WorksSection";
import KnowSection from "../../Components/KnowSection";
import LatestBlogsSection from "../../Components/LatestBlogs";


function HomePage(){
    return (
        <Fragment>
            <HeroSection/>
            <ServicesSection/>
            <WorksSection/>
            <KnowSection/>
            <LatestBlogsSection/>
        </Fragment>
    );
}


export default HomePage;