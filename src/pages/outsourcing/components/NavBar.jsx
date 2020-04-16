import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { NavLink } from "reactstrap";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

// import { useState } from 'react';
// import HeaderLink from "./header/HeaderLink";
class NavBar extends Component {
    
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("menu-shrink");
                elem.classList.add("fixed-top");
            } else {
                elem.classList.remove("menu-shrink");
                elem.classList.remove("fixed-top");
            }
        });
        window.scrollTo(0, 0);
        
        
    
    }
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
          show: false
        };


      }

      handleClose() {
        this.setState({ show: false });
      }

      handleShow() {
        this.setState({ show: true });
    }
    

  render() {
      
    return (
        <React.Fragment>
           
            <Navbar
                id="navbar"
                bg="light"
                expand="lg"
                className="navbar navbar-expand-md navbar-light"
                collapseOnSelect={true}
            >
                <Container>
                    <Navbar.Brand className="navbar-brand logo">
                        <React.Fragment>
                            <LinkContainer exact to="/">
                            <img 
                                        className="img-fluid img-one" 
                                        src={this.props.MainLogo}
                                        alt="Logo"
                                              
                                    />
                            </LinkContainer>
                        </React.Fragment>
                    </Navbar.Brand>
                    <Navbar.Brand className="navbar-brand logo-2"> 
                            <React.Fragment>
                               <LinkContainer exact to="/">
                                    <img 
                                        className="img-fluid img-two" 
                                        src={this.props.Logo2}
                                        alt="Logo"
                                    />
                                </LinkContainer>
                            </React.Fragment>
                    </Navbar.Brand>

                    <Navbar.Toggle 
                        className="navbar-toggler" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        id="collaspe-btn"
                    />
                    <Navbar.Collapse 
                        id="navbarSupportedContent"
                    >
                        <Nav className="navbar-nav ml-auto">
                        {this.props.pageName === "home" ? (
                            <React.Fragment>
                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="smooths nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Home
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={-40} 
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Services
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                <div class="dropdown">
                                        <button class="nav-link">Portfolio</button>
                                        <div class="dropdown-content">
                                        <Link
                                                activeclass="active"
                                                to="works"
                                                spy={true}
                                                smooth={true}
                                                offset={-40}
                                                duration={800}
                                                className="nav-link"
                                                onClick={this.closeNavbar}
                                            >
                                                Projects
                                            </Link>
                                            <Link
                                                activeclass="active"
                                                to="team"
                                                spy={true}
                                                smooth={true}
                                                offset={-30}
                                                duration={800}
                                                className="nav-link"
                                                onClick={this.closeNavbar}
                                            >
                                                Team
                                            </Link>
                                            <Link
                                                activeclass="active"
                                                to="partners"
                                                spy={true}
                                                smooth={true}
                                                offset={-190}
                                                duration={800}
                                                className="nav-link"
                                                onClick={this.closeNavbar}
                                            >
                                                Clients
                                            </Link>
                                        </div>
                                       </div>
                                    
                                </Nav.Item>

                                {/* <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="partners"
                                        spy={true}
                                        smooth={true}
                                        offset={-120}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Investors
                                    </Link>
                                </Nav.Item> */}
                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="video-area"
                                        spy={true}
                                        smooth={true}
                                        offset={-190}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        About us
                                    </Link>
                                </Nav.Item>

                               

                                <Nav.Item>  

                                <div class="dropdown">
                                        <button class="nav-link">Pricing</button>
                                        <div class="dropdown-content">
                                        <Link
                                                activeclass="active"
                                                to="pricing"
                                                spy={true}
                                                smooth={true}
                                                offset={-60}
                                                duration={800}
                                                className="nav-link"
                                                onClick={this.closeNavbar}
                                            >
                                                Packages 
                                            </Link>
                                            <Link
                                                activeclass="active"
                                                to="quote"
                                                spy={true}
                                                smooth={true}
                                                offset={-40}
                                                duration={800}
                                                className="nav-link"
                                                onClick={this.closeNavbar}
                                            >
                                                Free quote
                                            </Link>
                                          
                                        </div>
                                       </div>

                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-20}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Contact us
                                    </Link>
                                </Nav.Item>

                            
                                   

                                    <Nav.Item>
                                         <NavLink href="https://www.facebook.com/itlandservices/" target="_blank" className="nav-link"><Icofont icon="icofont-facebook"/></NavLink>


                                    </Nav.Item>
                                    <Nav.Item>
                                    <NavLink href="https://www.facebook.com/itlandservices/" target="_blank" className="nav-link"><Icofont icon="icofont-instagram"/></NavLink>


                                    </Nav.Item>
                                    <Nav.Item>
                                    <NavLink href="https://www.facebook.com/itlandservices/" target="_blank" className="nav-link"><Icofont icon="icofont-linkedin"/></NavLink>


                                    </Nav.Item>

                                    <Nav.Item>
                                    {/* <NavLink href="https://www.facebook.com/itlandservices/" target="_blank" className="nav-link"><Icofont icon="icofont-instagram"/></NavLink> */}


                                    </Nav.Item>
                                    
                                <Nav.Item>
                                    <Link
                                         activeclass="active"
                                     
                                        spy={true}
                                        smooth={true}
                                        offset={-40}
                                        duration={800}
                                        className="nav-link"
                                       
                                    >
                                        
                                    </Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Link
                                        // activeclass="active"
                                     
                                        spy={true}
                                        smooth={true}
                                        offset={-40}
                                        duration={800}
                                        className="nav-link"
                                       
                                    >
                                        
                                    </Link>
                                </Nav.Item> */}
                                   
                                   {/* <Nav.Item>
                                    <Link
                                        // activeclass="active"
                                     
                                        spy={true}
                                        smooth={true}
                                        offset={-40}
                                        duration={800}
                                        className="nav-link"
                                       
                                    >
                                        
                                    </Link>
                                </Nav.Item> */}
                                <Nav.Item>
                                    <Link
                                        // activeclass="active"
                                     
                                        spy={true}
                                        smooth={true}
                                        offset={-40}
                                        duration={800}
                                        className="nav-link"
                                    
                                    >
                                      <Icofont icon="icofont-key-hole" size="1.5"/>  Login
                                    </Link>
                                </Nav.Item>
                                    {/* <Nav.Item> */}
                                            {/* <HeaderLink /> */}
                                    {/* </Nav.Item> */}

                                {/* <Nav.Item >
                                    <HeaderLink />
                                    
                                </Nav.Item> */}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Home
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Services
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Works
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        About us
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Team
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Blog
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Pricing
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Contact
                                    </NavLink>
                                </Nav.Item>
                            </React.Fragment>
                        )}
                        </Nav>
                    </Navbar.Collapse>     
                </Container>
            </Navbar>
        </React.Fragment>
    );
  }
}
//Props Types
NavBar.propTypes = {
    mailLink: PropTypes.string,
    mail: PropTypes.string,
    numberLink: PropTypes.string,
    Number: PropTypes.string,
    facebookLink: PropTypes.string,
    twitterLink: PropTypes.string,
    instagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
    MainLogo: PropTypes.string,
    Logo2: PropTypes.string,
};

//Default Props
NavBar.defaultProps = {
    MainLogo: require('../../../assets/img/logos/6.png'),
    Logo2: require('../../../assets/img/logos/5.png'),
    mailLink: "mailto:name@email.com",
    mail: "development@itlandgroup.com",
    numberLink: "callto:+201017372790",
    Number: "+201017372790",
    facebookLink: "https://reactstrap.github.io/components/modals/",
    twitterLink: "//twitter.com/envato",
    instagramLink: "//instagram.com/envato/",
    
};
export default NavBar;
