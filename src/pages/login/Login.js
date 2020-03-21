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
const dashboardRoutes = [];


const useStyles = makeStyles(styles);

function Login(props) {


  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");
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
      <Parallax filter image={require("./component/1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
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
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Login);




{/* <div className={classes.logotypeContainer}>
<img src={logo} alt="logo" className={classes.logotypeImage} />
<Typography className={classes.logotypeText}>IT LAND</Typography>
</div>
<div className={classes.formContainer}>
<div className={classes.form}>
  <Tabs
    value={activeTabId}
    onChange={(e, id) => setActiveTabId(id)}
    indicatorColor="primary"
    textColor="primary"
    centered
  >
    <Tab label="Login" classes={{ root: classes.tab }} />
    <Tab label="New User" classes={{ root: classes.tab }} />
  </Tabs>
  {activeTabId === 0 && (
    <React.Fragment>
      <Typography variant="h1" className={classes.greeting}>
        Good Morning, User
      </Typography>
      <Button size="large" className={classes.googleButton}>
        <img src={google} alt="google" className={classes.googleIcon} />
        &nbsp;Sign in with Google
      </Button>
      <div className={classes.formDividerContainer}>
        <div className={classes.formDivider} />
        <Typography className={classes.formDividerWord}>or</Typography>
        <div className={classes.formDivider} />
      </div>
      <Fade in={error}>
        <Typography color="secondary" className={classes.errorMessage}>
          Something is wrong with your login or password :(
        </Typography>
      </Fade>
      <TextField
        id="email"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={loginValue}
        onChange={e => setLoginValue(e.target.value)}
        margin="normal"
        placeholder="Email Adress"
        type="email"
        fullWidth
      />
      <TextField
        id="password"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={passwordValue}
        onChange={e => setPasswordValue(e.target.value)}
        margin="normal"
        placeholder="Password"
        type="password"
        fullWidth
      />
      <div className={classes.formButtons}>
        {isLoading ? (
          <CircularProgress size={26} className={classes.loginLoader} />
        ) : (
          <Button
            disabled={
              loginValue.length === 0 || passwordValue.length === 0
            }
            onClick={() =>
              loginUser(
                userDispatch,
                loginValue,
                passwordValue,
                props.history,
                setIsLoading,
                setError,
              )
            }
            variant="contained"
            color="primary"
            size="large"
          >
            Login
          </Button>
        )}
        <Button
          color="primary"
          size="large"
          className={classes.forgetButton}
        >
          Forget Password
        </Button>
      </div>
    </React.Fragment>
  )}
  {activeTabId === 1 && (
    <React.Fragment>
      <Typography variant="h1" className={classes.greeting}>
        Welcome!
      </Typography>
      <Typography variant="h2" className={classes.subGreeting}>
        Create your account
      </Typography>
      <Fade in={error}>
        <Typography color="secondary" className={classes.errorMessage}>
          Something is wrong with your login or password :(
        </Typography>
      </Fade>
      <TextField
        id="name"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={nameValue}
        onChange={e => setNameValue(e.target.value)}
        margin="normal"
        placeholder="Full Name"
        type="email"
        fullWidth
      />
      <TextField
        id="email"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={loginValue}
        onChange={e => setLoginValue(e.target.value)}
        margin="normal"
        placeholder="Email Adress"
        type="email"
        fullWidth
      />
      <TextField
        id="password"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={passwordValue}
        onChange={e => setPasswordValue(e.target.value)}
        margin="normal"
        placeholder="Password"
        type="password"
        fullWidth
      />
      <div className={classes.creatingButtonContainer}>
        {isLoading ? (
          <CircularProgress size={26} />
        ) : (
          <Button
            onClick={() =>
              loginUser(
                userDispatch,
                loginValue,
                passwordValue,
                props.history,
                setIsLoading,
                setError,
              )
            }
            disabled={
              loginValue.length === 0 ||
              passwordValue.length === 0 ||
              nameValue.length === 0
            }
            size="large"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.createAccountButton}
          >
            Create your account
          </Button>
        )}
      </div>
      <div className={classes.formDividerContainer}>
        <div className={classes.formDivider} />
        <Typography className={classes.formDividerWord}>or</Typography>
        <div className={classes.formDivider} />
      </div>
      <Button
        size="large"
        className={classnames(
          classes.googleButton,
          classes.googleButtonCreating,
        )}
      >
        <img src={google} alt="google" className={classes.googleIcon} />
        &nbsp;Sign in with Google
      </Button>
    </React.Fragment>
  )}
</div>
<Typography color="primary" className={classes.copyright}>
  © 2014-2019 Flatlogic, LLC. All rights reserved.
</Typography>
</div> */}