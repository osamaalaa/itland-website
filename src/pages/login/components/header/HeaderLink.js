/*eslint-disable*/
import React , { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import LockOpenIcon from '@material-ui/icons/LockOpen';
// core components
import CustomDropdown from "./CustomDropdown.js";
import Button from "./Button";
import styles from "./headerLinkStyle";
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// =======================Card===================================
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import { Paper, withStyles, Grid, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import logo from "../../../../assets/img/logos/logoLoginModal.png";


//===================UserLogin=========================================
import { useUserDispatch, loginUser } from "../../../../context/UserContext";

//======================================================================

fontawesome.library.add(brands)
const useStyles = makeStyles(styles);


export default function HeaderLinks(props)
 {    

  
  const classes = useStyles();
  const [openModel, setOpenModel] = React.useState(false);

  const handleOpen = () => {
    setOpenModel(true);
  };

  const handleClose = () => {
    setOpenModel(false);
  };

  // =======================
  // global
  // var userDispatch = useUserDispatch();

  // local
  // var [isLoading, setIsLoading] = useState(false);
  // var [error, setError] = useState(null);
  // var [activeTabId, setActiveTabId] = useState(0);
  // var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");


  //==========================

  return (
    <React.Fragment>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={handleOpen} disabled>
          <LockOpenIcon className={classes.icons}  /> Login
        </Button>
        {/* ====================Model=================================== */}
        <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openModel}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
            <Fade in={openModel}>
                  <Paper className={classes.padding} elevation={3}>
                    <img src ={logo} alt="logoImg"  className= {classes.ImgLogo}/>
                      <div className={classes.margin}>
                          <Grid container spacing={8} alignItems="flex-end">
                              <Grid item>
                                  <Face />
                              </Grid>
                              <Grid item md={true} sm={true} xs={true}>
                                  <TextField id="username" 
                                  label="ITLAND Code"
                                   type="email"    
                                    value={loginValue}
                                     fullWidth autoFocus required />
                              </Grid>
                          </Grid>
                          <Grid container spacing={8} alignItems="flex-end">
                              <Grid item>
                                  <Fingerprint />
                              </Grid>
                              <Grid item md={true} sm={true} xs={true}>
                                  <TextField id="username" label="Password" type="password"  value={passwordValue}
                                                           fullWidth required />
                              </Grid>
                          </Grid>
                          <Grid container alignItems="center" justify="space-between">
                              <Grid item>
                                  <FormControlLabel control={
                                      <Checkbox
                                          color="primary"
                                      />
                                  } label="Remember me" />
                              </Grid>
                              <Grid item>
                                  {/* <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button> */}
                              </Grid>
                          </Grid>
                          <Grid container justify="center" style={{ marginTop: '10px' }}>
                              <Button
                               variant="outlined" color="primary" style={{ textTransform: "none" }}
                               disabled={
                                loginValue.length === 0 || passwordValue.length === 0
                              }
                              
                               
                               disabled >Login</Button>
                          </Grid>
                      </div>
                  </Paper>
            </Fade>
          </Modal>
          {/* =====================End Model========================================================= */}


{/* 
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/itlandservices/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/osamaalaa133"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> 
    </List> */}
    </React.Fragment>
  );
}
