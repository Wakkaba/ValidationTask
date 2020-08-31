import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FrontEndRoutes from "../data/constants /FrontEndRoutes";
import SignUpContainer from "../component/container/SignUpContainer";

const Root = (props) => {
  return (
    <Switch>
      <Route exact path={FrontEndRoutes.SIGN_UP} component={SignUpContainer} />
      <Route exact path={FrontEndRoutes.SIGN_UP} />
      <Redirect to={FrontEndRoutes.SIGN_UP} />
    </Switch>
  );
};
