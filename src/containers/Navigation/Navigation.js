import React, { Component } from "react";

import { Route, Switch, NavLink } from "react-router-dom";
import LinkPage from "../../components/LinkPage";
import Profile from "../Profile/Profile";
import Modal from "../Modals/Modal";
import Signup from "../Modals/Signup/Signup";
import LoginBody from "../Modals/Login/LoginBody";

import { BsFillPersonFill, BsPersonPlusFill } from "react-icons/bs";
import { MdWork, MdSchool } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import {
  AiOutlineCloseCircle,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";

import "./Navigation.css";

export default class Navigation extends Component {
  componentDidMount() {}
  closebtnHandler() {}
  render() {
    // console.log(this.props.checklogin);
    return (
        <div className="nav">
          <>
            <NavLink
              className="button"
              to="/"
              // onClick={(event) => this.openNewTab(event, "/add-new-profile")}
            >
              <AiOutlineLogin />
            </NavLink>
            <NavLink
              className="button"
              to="/profile"
              // onClick={(event) => this.openNewTab(event, "/profile")}
            >
              <BsFillPersonFill />
            </NavLink>
            <NavLink
              className="button"
              to="/workplace-links"
              // onClick={(event) => this.openNewTab(event, "/workplace-links")}
            >
              <MdWork />
            </NavLink>
            <NavLink
              className="button"
              to="/community-links"
              // onClick={(event) => this.openNewTab(event, "/community-links")}
            >
              <FaHandsHelping />
            </NavLink>
            <NavLink
              className="button"
              to="/learning-links"
              // onClick={(event) => this.openNewTab(event, "/learning-links")}
            >
              <MdSchool />
            </NavLink>
            <NavLink
              className="button"
              to="/personal-links"
              // onClick={(event) => this.openNewTab(event, "/personal-links")}
            >
              <GiSelfLove />
            </NavLink>
            <NavLink
              className="button"
              to="/logout"
              // onClick={(event) => this.openNewTab(event, "/personal-links")}
            >
              <AiOutlineLogout />
            </NavLink>
            <NavLink
              className="button"
              to="/add-new-profile"
              // onClick={(event) => this.openNewTab(event, "/add-new-profile")}
            >
              <BsPersonPlusFill />
            </NavLink>
            <NavLink to="#" className="button">
              <AiOutlineCloseCircle onClick={this.closebtnHandler} />
            </NavLink>
          </>
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => {
                return (
                  <Modal>
                    <LoginBody {...routeProps}/>
                  </Modal>
                );
              }}
            />
            <Route path="/profile" component={Profile} />
            <Route
              path="/add-new-profile"
              exact
              render={(routeProps) => {
                return (
                  <Modal>
                    <Signup {...routeProps} />
                  </Modal>
                );
              }}
            />
            <Route path="/:link" component={LinkPage} />
          </Switch>
        </div>
    );
  }
}
