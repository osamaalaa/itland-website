import React, { Component } from 'react';
import PropTypes from "prop-types";
// import Icofont from 'react-icofont';
// import { Link } from 'react-router-dom';
// import OwlCarousel from "react-owl-carousel3";
// import ScrollAnimation from 'react-animate-on-scroll';

import osama from "../../../assets/img/osama.jpg";
import marihan from "../../../assets/img/marihan.jpg";
import lotfe from "../../../assets/img/lotfe.jpg";
import aya from "../../../assets/img/aya.jpg";
import asya from "../../../assets/img/asya.jpg";
import mohamed from "../../../assets/img/mohamedibrahim.jpg";
class Team extends Component {
  render() {
    
    //Team loop END 
    return (
        <React.Fragment>
             <section id="team" className="our-team ptb-100">
                    <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                        <h2>{this.props.sectionTitle}</h2>
                                        <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                    </div>
                        </div>
            <div className="box">
            <div className="card">
                <div className="imgBx">
                    <img src={mohamed} alt="images" />
                </div>
                <div class="details">
                    <h2>Mohamed Ibrahim<span>Founder & Director</span></h2>
                </div>
            </div>
            
            <div className="card">
                <div className="imgBx">
                    <img src={osama} alt="images" />
                </div>
                <div className="details">
                    <h2>Marihan<span>Software Developer</span></h2>
                </div>
            </div>

            <div className="card">
                <div className="imgBx">
                    <img src={marihan} alt="images" />
                </div>
                <div className="details">
                    <h2>Marihan<span>Software Developer</span></h2>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    <img src={asya} alt="images" />
                </div>
                <div className="details">
                    <h2>Asya Heikal<span>Sales Specialist</span></h2>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    <img src={marihan} alt="images" />
                </div>
                <div className="details">
                    <h2>Marihan Adel<span>Graphic Designer</span></h2>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    <img src={osama} alt="images" />
                </div>
                <div className="details">
                    <h2>Osama Alaa<span>Software Developer</span></h2>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    <img src={aya} alt="images" />
                </div>
                <div className="details">
                    <h2>Aya Nawar<span>Software Developer</span></h2>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    <img src={lotfe} alt="images" />
                </div>
                <div className="details">
                    <h2>Mohamed Lotfe<span>Marketing Specialist</span></h2>
                </div>
            </div>
            </div>
                </section>   
        </React.Fragment>
    );
  }
}
//Props Types
Team.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    teamsData: PropTypes.array
};

//Default Props
Team.defaultProps = {
    SectionbgTitle: "Team",
    sectionTitle: "Our Team"
    
};

export default Team;
