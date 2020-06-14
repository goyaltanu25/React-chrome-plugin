import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";

import { Route, Switch } from "react-router-dom";
// import { Button, Form } from "react-bootstrap";

// import { NavLink } from "react-router-dom";

// import { BsThreeDotsVertical, BsPersonPlusFill } from "react-icons/bs";
// import { MdWork, MdSchool } from "react-icons/md";
// import { FaHandsHelping } from "react-icons/fa";
// import { GiSelfLove } from "react-icons/gi";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import Container from "react-bootstrap/Container";

// import ExtensionContainer from "./containers/Modals/ExtensionModal/ExtensionContainer";
import LinkPage from "../src/components/LinkPage";
import Profile from "./containers/Profile/Profile";
import NewProfilePortalModal from "./containers/Modals/NewProfileModal/NewProfilePortal";
import ExtensionBody from "../src/containers/ExtensionBody/ExtensionBody";
import NewProfileBody from "../src/containers/NewProfileBody/NewProfileBody";

import "./App.css";
// import LinksParentPage from "./containers/LinksParentPage/LinksParentPage";
import { BrowserRouter } from "react-router-dom";
// import ExtensionContainer from "./containers/Modals/ExtensionModal/ExtensionContainer";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <ExtensionBody/>
          <Switch>
            {/* <Route exact path="/" component={ExtensionBody} /> */}
            <Route path="/profile" component={Profile} />
            <Route
              path="/add-new-profile"
              exact
              render={() => {
                return (
                  <NewProfilePortalModal>
                    <NewProfileBody />
                  </NewProfilePortalModal>
                );
              }}
            />
            <Route path="/:link" component={LinkPage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
