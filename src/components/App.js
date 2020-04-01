import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login/Login";

// context
import { useUserState } from "../context/UserContext";
// import MainPage from '../pages/mainpage/mainpage';

import { CSSTransition } from "react-transition-group";

//Package CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//Template CSS Style
import "./style.css";
import "../assets/css/responsive.css";
import "../assets/css/color/color-red.css";


export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (

    <CSSTransition
    
    timeout={{ enter: 900, exit: 900 }}
    classNames="fade"
>
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/home"/>} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/home" />}
        />
        {/* <PrivateRoute path="/app" component={Error} /> */}
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
    </CSSTransition>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
