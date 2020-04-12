import React from 'react';
import { withRouter } from "react-router-dom";
//Import Component
import NavBar from "./components/NavBar";
// import BannerThree from "./components/banner/BannerThree";
// import BannerOne from "./components/banner/BannerOne";
import BannerTwo from "./components/banner/BannerTwo";
// import Feature from "./components/Feature";
import Services from "./components/Services";
// import WelcomeServices from "./components/WelcomeServices";
// import Works from "./components/Works";
// import About from "./components/About";
// // import Team from "./components/Team";
// // import Blog from "./components/Blog";
// import VideoArea from "./components/VideoArea";
// // import Pricing from "./components/Pricing";
// import FunFacts from "./components/FunFacts";
// import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
// import Partner from "./components/Partner"; 
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from 'react-scroll'

function OutSourcing(props) { 

  return (
    <React.Fragment>
    {/* NavBar: src/components/NavBar.jsx */}
     <NavBar pageName="home" /> 
    <BannerTwo />
    

    {/* Services: src/components/Services.jsx */}
    <Element id='example-destination' name='example-destination'>
      <Services />
    </Element>
    {/* WelcomeServices: src/components/WelcomeServices.jsx */}
    {/* <WelcomeServices /> */}

    {/* Works: src/components/Works.jsx */}
    {/* <Works /> */}

    {/* About: src/components/About.jsx */}
    {/* <About /> */}
    
    
    {/* Blog: src/components/Blog.jsx */}
    {/* <Blog /> */}
     {/* Partner: src/components/Partner.jsx */}
     {/* <Partner /> */}
     
    {/* VideoArea: src/components/VideoArea.jsx */}
    {/* <VideoArea /> */}
    {/* Pricing: src/components/Pricing.jsx */}
    {/* <Pricing />  */}
    {/* FunFacts: src/components/FunFacts.jsx */}
    {/* <FunFacts /> */}
    {/* Testimonials: src/components/Testimonials.jsx */}
    {/* <Testimonials /> */}
    {/* FAQ: src/components/FAQ.jsx */}
    {/* <FAQ /> */}
      
    {/* Team: src/components/Team.jsx */}
    {/* <Team /> */}
    {/* <Employee /> */}
    {/* Contact: src/components/Contact.jsx */}
    {/* <Contact /> */}
    {/* Footer: src/components/Footer.jsx */}
    <Footer />
</React.Fragment>
  );
}

export default withRouter(OutSourcing);