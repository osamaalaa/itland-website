import React, { useState } from "react";
import classnames from "classnames";


import { withRouter } from "react-router-dom";

// context
// import { useUserDispatch, loginUser } from "../../context/UserContext";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

// core components
import Header from "./component/Header";
import HeaderLinks from "./component/HeaderLink";
import Footer from "./component/Footer";
import GridContainer from "./component/Grid/GridContainer";
import GridItem from "./component/Grid/GridItem";
import Button from "./component/Button";
import Card from "./component/Card/Card";
import CardBody from "./component/Card/CardBody";
import CardHeader from "./component/Card/CardHeader";
import CardFooter from "./component/Card/CardFooter";
import CustomInput from "./component/CustomInput/CustomInput";
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
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

import Slider from './component/ImageSlider/Slider';
import images from './component/ImageSlider/images';


const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];


fontawesome.library.add(brands)
const dashboardRoutes = [];


const useStyles = makeStyles(styles);

function Login(props) {
//============================================================
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  //======================================End======================================
  // global
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <img />
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
      <Parallax filter image={require("./component/1.jpg")}>
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
          <Card>
             <Slider slides={images} />
          </Card>
          <WorkSection /> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Login);