import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component {
  render() {
      //Service loop start
      const servicedata = this.props.servicesData.map((service, index) => (
        <div className="col-md-6 col-lg-4 text-center" key={index}>
            <div className="service-item">
                <div className="glyph">
                    <Icofont icon={service.icon} />
                </div>
                <h3>{service.heading}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    ));
    //Service loop END
    return (
        <React.Fragment>
            <section id="services" className="services ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="row">
                        {servicedata}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
Services.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    SectionbgTitle: "Services",
    sectionTitle: "Services",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",

    servicesData: [
        {
            icon: "icofont-live-support",
            heading: "Outsourcing Services",
            description:
                "A World Class Creative Canadian Company with its Egyptian Site Offering, Professional, High Quality, Affordable Websites, Web & Mobile Applications, e-Commerce and Software Solutions for Small Business & Enterprises."
        },
        {
            icon: "icofont-chart-growth",
            heading: "Online Marketing Services",
            description:
                "Websites promote you 24/7 No employee will do that.                                                             "
        },
        {
            icon: "icofont-computer",
            heading: "Computer Courses",
            description:
                "Web development-Mobile development -online Marketing                                                             "
        },
        {
            icon: "icofont-learn",
            heading: "English Courses",
            description:
                "Improve fluency through practice and speaking drills-expanding vocabulary usage through class work and activities "
        },
        {
            icon: "icofont-rocket-alt-1",
            heading: "Business English",
            description:
                "Giving a successful presentation-business etiquette-job interviews-business slang and abbreviations               "
        },
        {
            icon: "icofont-kid",
            heading: "English For Kids",
            description:
                "Academic enrichment- recreational activities-intensive school work  help                                           "
        },
    ]
};

export default Services;
