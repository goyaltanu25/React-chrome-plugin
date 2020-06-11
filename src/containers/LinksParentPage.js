import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import "./LinksParentPage.css";

import LinkPage from "../components/LinkPage";
import Profile from "../containers/Profile/Profile";

import { BsThreeDotsVertical } from "react-icons/bs";
import { MdWork, MdSchool } from "react-icons/md";
import { FaHandsHelping, FaShareAlt } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import Container from "react-bootstrap/Container";


import "./LinksParentPage.css";

class LinksParentPage extends React.Component {
  render() {
    return (
      <Container fluid>
        <header>
          <div className="nav">
            <NavLink className="button" to="/">
              <BsThreeDotsVertical />
            </NavLink>
            <NavLink className="button" to="/workplace-links">
              <MdWork />
            </NavLink>
            <NavLink className="button" to="/community-links">
              <FaHandsHelping />
            </NavLink>
            <NavLink className="button" to="/learning-links">
              <MdSchool />
            </NavLink>
            <NavLink className="button" to="/personal-links">
              <GiSelfLove />
            </NavLink>
            <NavLink className="button" to="/closeToggle">
              <AiOutlineClose />
            </NavLink>
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Profile} />
          <Route path="/:link" component={LinkPage} />
        </Switch>
      </Container>
    );
  }
}

export default LinksParentPage;
