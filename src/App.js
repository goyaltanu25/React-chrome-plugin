import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";

// import { Route, Switch } from "react-router-dom";
// import { Button, Form } from "react-bootstrap";

// import { NavLink, Link } from "react-router-dom";

// import { BsThreeDotsVertical, BsPersonPlusFill } from "react-icons/bs";
// import { MdWork, MdSchool } from "react-icons/md";
// import { FaHandsHelping, FaShareAlt } from "react-icons/fa";
// import { GiSelfLove } from "react-icons/gi";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import Container from "react-bootstrap/Container";

// import ExtensionContainer from "./containers/Modals/ExtensionModal/ExtensionContainer";
// import LinkPage from "../src/components/LinkPage";
// import Profile from "./containers/Profile/Profile";
// import NewProfilePortalModal from "./containers/Modals/NewProfileModal/NewProfilePortal";

import "./App.css";
import LinksParentPage from "./containers/LinksParentPage/LinksParentPage";
import { BrowserRouter } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <LinksParentPage/>
      </BrowserRouter>

    );
  }
}

export default App;
