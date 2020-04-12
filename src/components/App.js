import React from "react";
import {  Route, Switch } from "react-router-dom";

// components
// import Layout from "./Layout";

// pages
// import Error from "../pages/error";
import Login from "../pages/login/Login";



// import MainPage from '../pages/mainpage/mainpage';

import { CSSTransition } from "react-transition-group";


// import Dashboard from "../pages/dashboard/Dashboard";
//Package CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//Template CSS Style
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color/color-red.css";

//Template CSS Style
import "../assets/css/style.css";
import "../assets/css/responsive.css";
// import "../assets/css/color/color-default.css"


//Import Component

import ScrollUpBtn from "../pages/login/components/ScrollUp";

import Page from "react-page-loading";
// import { CSSTransition } from "react-transition-group";

//Package CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";
import OutSourcing from "../pages/outsourcing/OutSourcing";

export default function App() {
  // global
  // var { isAuthenticated } = useUserState();

  return (

    <div className="App">
    <Page loader={"spin"} color={"#b33541"} size={4}>
        <div>
            <Route
                render={({ location }) => (
                    <CSSTransition
                        key={location.key}
                        timeout={{ enter: 900, exit: 900 }}
                        classNames="fade"
                    >
                        <section className="route-section">
                            <Switch location={location}>
                                <Route
                                    path="/itland/outsourcing"
                                     component={OutSourcing}
                                />
                                <Route
                                    path="/"
                                    component={Login}
                                />
                                {/* <Redirect to="/not-found" /> */}
                            </Switch>
                        </section>
                    </CSSTransition>
                )}
            />
            {/* ScrollUpBtn: src/components/ScrollUp.jsx */}
            <ScrollUpBtn />
        </div>
    </Page>
</div>
  );

  // #######################################################################

  // function PrivateRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         isAuthenticated ? (
  //           React.createElement(component, props)
  //         ) : (
  //           <Redirect
  //             to={{
  //               pathname: "/login",
  //               state: {
  //                 from: props.location,
  //               },
  //             }}
  //           />
  //         )
  //       }
  //     />
  //   );
  // }

  // function PublicRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         isAuthenticated ? (
  //           <Redirect
  //             to={{
  //               pathname: "/",
  //             }}
  //           />
  //         ) : (
  //           React.createElement(component, props)
  //         )
  //       }
  //     />
  //   );
  // }
}
