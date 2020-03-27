import React, { useState } from "react";
import classnames from "classnames";


import { withRouter } from "react-router-dom";

// context
// import { useUserDispatch, loginUser } from "../../context/UserContext";

import { makeStyles } from "@material-ui/core/styles";


// core components
import Header from "./component/Header";
import HeaderLinks from "./component/HeaderLink";
import Footer from "./component/Footer";
import GridContainer from "./component/Grid/GridContainer";
import GridItem from "./component/Grid/GridItem";
import Button from "./component/Button";
import Parallax from "./component/Parallax/Parallax";
// import styles from "./component/loginPageStyle";
import styles from "./component/landingPage.js";

import image from "./component/1.jpg";

// Sections for this page
import ProductSection from "./component/Sections/ProductSection";
import TeamSection from "./component/Sections/TeamSection";
import WorkSection from "./component/Sections/WorkSection";
import { useUserDispatch, loginUser } from "../../context/UserContext";
import classNames from "classnames";
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';


import Slider from './component/ImageSlider/Slider';
import images from './component/ImageSlider/images';



fontawesome.library.add(brands)
const dashboardRoutes = [];


const useStyles = makeStyles(styles);

function Login(props) { 
//============================================================

  
  //======================================End======================================
  // global
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="IT LAND"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      {/* ======================================================= */}


      {/* ==================================================== */}
      {/* <Parallax filter image={require("./component/1.jpg")}> */}
      <Parallax filter >
      {/* <Slider slides={images} />
      height: 86vh;
    width: 102vw; */}
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Career Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" fab fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* ========================================================= */}


      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
             <Slider slides={images} />
          <WorkSection /> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Login);