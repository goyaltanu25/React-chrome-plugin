import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import "./LinksParentPage.css";

import LinkPage from "../components/LinkPage";
import Profile from "../containers/Profile/Profile";

import { BsThreeDotsVertical, BsPersonPlusFill } from "react-icons/bs";
import { MdWork, MdSchool } from "react-icons/md";
import { FaHandsHelping, FaShareAlt } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Container from "react-bootstrap/Container";
import { Button, Form, Navbar } from "react-bootstrap";

import "./LinksParentPage.css";
import NewProfilePortalModal from "./NewProfilePortal/NewProfilePortal";

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
            <NavLink className="button" to="/add-new-profile">
              <BsPersonPlusFill />
            </NavLink>
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Profile} />
          <Route
            path="/add-new-profile"
            exact
            render={() => {
              return (
                <NewProfilePortalModal>
                  <Form className="portal-form">
                    <h3 style={{textAlign:'center'}}> Profile Details</h3>
                    <hr className="hr-line"/>
                    <Form.Group controlId="avatarname">
                      <Form.Label>Avatar Name :</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Avatar Name"
                      />
                    </Form.Group>
                    <Form.Group controlId="itemDescription">
                      <Form.Label>Upload Image:</Form.Label>
                      <Form.Control
                        required
                        type="file"
                        placeholder="Upload file"
                      />
                    </Form.Group>
                  </Form>
                  <Button type="submit" id="submitbtn" variant="primary">
                    Add
                  </Button>
                </NewProfilePortalModal>
              );
            }}
          />
          <Route path="/:link" component={LinkPage} />
        </Switch>
      </Container>
    );
  }
}

export default LinksParentPage;
