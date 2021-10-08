import React, { Fragment } from "react";
import Header from "../UI/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className="ng-scope" id="main-content">{props.children}</div>
    </Fragment>
  );
};

export default Layout;
