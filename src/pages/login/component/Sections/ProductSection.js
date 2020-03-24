import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem.js"; 

import InfoArea from "../InfoArea/InfoArea";

import styles from "./productStyle";
import ReactCardCarousel from "react-card-carousel";
import imageCard from "./img/faces/osama.jpg";
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk about services</h2>
          <h5 className={classes.description}>
          
          </h5>
        </GridItem>
      </GridContainer>
      <div >
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            {/* <InfoArea
              title="English Courses"
              icon={Chat}
              iconColor="info"
              vertical
            /> */}
            {/* <div  className={classes.carContainer}> */}
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                  <div ><img src={imageCard} alt="..." className={classes.imgCont} /></div>
                  <div ><img src={imageCard} alt="..." className={classes.imgCont} /></div>
                  <div ><img src={imageCard} alt="..." className={classes.imgCont} /></div>
                  <div ><img src={imageCard} alt="..." className={classes.imgCont} /></div>
                  <div ><img src={imageCard} alt="..." className={classes.imgCont} /></div>
                </ReactCardCarousel>
             {/* </div> */}
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                  <div className={classes.carCard}>Programming First Card</div>
                  <div className={classes.carCard}>Programming Second Card</div>
                  <div className={classes.carCard}>Programming Third Card</div>
                  <div className={classes.carCard}>Programming Fourth Card</div>
                  <div className={classes.carCard}>Programming Fifth Card</div>
          </ReactCardCarousel>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
              <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                      <div className={classes.carCard}>Programming First Card</div>
                      <div className={classes.carCard}>Programming Second Card</div>
                      <div className={classes.carCard}>Programming Third Card</div>
                      <div className={classes.carCard}>Programming Fourth Card</div>
                      <div className={classes.carCard}>Programming Fifth Card</div>
              </ReactCardCarousel>
            {/* <InfoArea
             
              vertical
            /> */}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
