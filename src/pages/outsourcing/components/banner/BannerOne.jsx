import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";

class BannerOne extends Component {
    render() {
        //BannerOne loop start
        const banneronedata = this.props.banneronesData.map(
            (bannerone, index) => ( 
                <div className={bannerone.BgClass} key={index}>
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 col-centered">
                                            <span
                                                className={
                                                    isVisible
                                                        ? "hero-text animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.TopTitle}
                                            </span>

                                            <h1
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.Title}
                                            </h1>
                                            <p
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.Content}
                                            </p>
                                            <div className="center-wrap">
                                                <Link to={bannerone.BtnLink} className="btn-a">
                                                    <div className="button">
                                                        {bannerone.BtnName}
                                                        <Icofont icon="icofont-long-arrow-right" />
                                                    <div className="mask" /></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            )
        );
        //BannerOne loop END
        
        //Thumbs loop Start
        const thumbdata = this.props.thumbsData.map((thumb, index) => (
            <div className="owl-thumb-item" key={index}>
                <Icofont icon={thumb.ThumbIcon} />
                <h3>{thumb.ThumbTitle}</h3>
                <p>{thumb.ThumbContent}</p>
            </div>
            )
        );
        //Thumbs loop END
        return (
            <React.Fragment>
                <div id="home" className="hompage-slides-wrapper">
                    <OwlCarousel
                        className="owl-theme homepage-slides"
                        items={1}
                        touchDrag={true}
                        margin={0}
                        mouseDrag={true}
                        smartSpeed={1500}
                        dotData={true}
                        autoplay={true}
                        dotsContainer={".owl-thumbs"}
                        loop={true}
                    >
                         {/* <div class="item-video" data-merge="3"><a class="owl-video" href="https://vimeo.com/23924346"></a></div> */}
                       {banneronedata} 
                     
                    </OwlCarousel>


                    <div className="owl-thumbs">
                        {thumbdata}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
//Props Types
BannerOne.propTypes = {
    banneronesData: PropTypes.array,
    thumbsData: PropTypes.array
};

//Default Props
BannerOne.defaultProps = {
    banneronesData: [
        {
            BgClass: "single-slider-item slide-bg-1",
            TopTitle: "Development & Support",
            Title: "Fully Responsive Design",
            BtnLink:  "/itland/outsourcing",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item slide-bg-2",
            TopTitle: "Mobile Applications",
            Title: "Fully Responsive Design",
            BtnLink:  "/#0",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item slide-bg-3",
            TopTitle: "Small Business Solutions",
            Title: "Fully Responsive Design",
            BtnLink:  "/#0",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item slide-bg-4",
            TopTitle: "Enterprise Solutions",
            Title: "Fully Responsive Design",
            BtnLink:  "/#0",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item slide-bg-5",
            TopTitle: "E-Commerce Solutions",
            Title: "Fully Responsive Design",
            BtnLink:  "/itland/outsourcing",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item slide-bg-6",
            TopTitle: "Digital Marketing",
            Title: "Fully Responsive Design",
            BtnLink:  "/#0",
            BtnName: "get started"
        }
    ],
    thumbsData: [
        {
            ThumbIcon: "icofont-responsive",
            ThumbTitle: "Development & Support",
            
            // ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "icofont-smart-phone",
            ThumbTitle: "Mobile Applications",
           
            // ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "icofont-company",
            ThumbTitle: "Small Business Solutions",
           
            // ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "icofont-web",
            ThumbTitle: "Enterprise Solutions",
            
            // ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "icofont-attachment",
            ThumbTitle: "E-Commerce Solutions",
            // ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "icofont-ui-user-group",
            ThumbTitle: "Digital Marketing",
            // ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
    ]
};

export default BannerOne;
