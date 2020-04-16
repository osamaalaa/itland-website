import React from 'react';
import { withRouter } from "react-router-dom";
//Import Component
import NavBar from "./components/NavBar";
// import BannerThree from "./components/banner/BannerThree";
import BannerOne from "./components/banner/BannerOne";
// import BannerTwo from "./components/banner/BannerTwo";
// import Feature from "./components/Feature";
import Services from "./components/Services";
// import WelcomeServices from "./components/WelcomeServices";s
import Works from "./components/Works";
import About from "./components/About";
import Team from "./components/Team";
//import blog from "./components/Blog";
import Quote from "./components/Quote";
import VideoArea from "./components/VideoArea";
import Pricing from "./components/Pricing";
import FunFacts from "./components/FunFacts";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Partner from "./components/Partner"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from 'react-scroll';

function OutSourcing(props) { 

  return (
    <React.Fragment>
    {/* NavBar: src/components/NavBar.jsx */}
     <NavBar pageName="home" /> 
    <BannerOne />
    

    {/* Services: src/components/Services.jsx */}
    <Element id='example-destination' name='example-destination'>
      <Services />
    </Element>
    {/* WelcomeServices: src/components/WelcomeServices.jsx */}
    {/* <WelcomeServices /> */}

    {/* Works: src/components/Works.jsx */}
    <Works />
    {/* Team: src/components/Team.jsx */}
    <Team />
     {/* Blog: src/components/Blog.jsx */}
    {/* <Blog /> */}
      {/* Blog: src/components/Blog.jsx */}
    {/* <Blog /> */}
    {/* Partner: src/components/Partner.jsx */}
    <Partner />

    {/* About: src/components/About.jsx */}
    <About />
    
    
   
     
     
    {/* VideoArea: src/components/VideoArea.jsx */}
    <VideoArea />
    {/* FunFacts: src/components/FunFacts.jsx */}
    <FunFacts />
    {/* Pricing: src/components/Pricing.jsx */}
    <Pricing /> 

     {/* quote: src/components/Quote.jsx */}
     <Quote />

   
    
    {/* Testimonials: src/components/Testimonials.jsx */}
    <Testimonials />
    
      
    
    {/* <Employee /> */}
    {/* Contact: src/components/Contact.jsx */}
    <Contact />
     {/* FAQ: src/components/FAQ.jsx
     <FAQ /> */}
    
    {/* Footer: src/components/Footer.jsx */}
    <Footer />
</React.Fragment>
  );
}

export default withRouter(OutSourcing);