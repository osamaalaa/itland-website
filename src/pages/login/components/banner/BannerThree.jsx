import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
// import videoaya from "../../assets/video.wmv"
import img from "../../../../assets/img/video-bg.jpg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
class BannerThree extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="home" className="home-video-area">
                <video id="bgvid" loop autoPlay muted>
                    <source src="http://taxify.co/wp-content/uploads/2014/06/file.mp4" type="video/mp4" />
                </video>
                 
            <div class="carousel-wrapper">
            <Carousel showArrows={true} showIndicators={false} showThumbs={false} showStatus={false} autoPlay={true} >
                <div>
                <img src={img} alt="MISSING JPG"/> 
                </div>
                <div>
                <img src={img} alt="Hong Kong" />
                </div>
                <div>
                <img src={img} alt="Hong Kong" />
                </div>
            </Carousel>
        </div>
                
                    <div className="video-text-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <span className="hero-text animated fadeInDown slow opacityOne">
                                        {this.props.TopTitle}
                                    </span>

                                    <h1
                                        className="animated fadeInDown slow opacityOne">
                                        {this.props.Title}
                                    </h1>
                                    <p
                                        className="animated fadeInDown slow opacityOne">
                                        {this.props.Content}
                                    </p>
                                    <div className="center-wrap">
                                        <Link to={this.props.BtnLink} className="btn-a">
                                            <div className="button">
                                                {this.props.BtnName}
                                                <Icofont icon="icofont-long-arrow-right" />
                                            <div className="mask" /></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </React.Fragment>
        );
    }
}
//Props Types
BannerThree.propTypes = {
    TopTitle: PropTypes.string,
    Title: PropTypes.string,
    Content: PropTypes.string,
    BtnLink: PropTypes.string,
    BtnName: PropTypes.string,
};

//Default Props
BannerThree.defaultProps = {
    TopTitle: "IT LAND",
    Title: "You Carrer Starts With Us.",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    BtnLink:  "/#",
    BtnName: "Watch Video",
};
export default BannerThree;
