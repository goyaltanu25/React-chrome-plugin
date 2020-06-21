import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";
import Modal from "../Modals/Modal";
import Signup from "../Modals/Signup/Signup";
import LoginBody from "../Modals/Login/LoginBody";
import { logout } from "../../redux/Login/LoginActions";
import { BsFillPersonFill, BsPersonPlusFill } from "react-icons/bs";

import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logoutHandler = () =>{
    this.props.logout();
  }

  render() {
    let { isUserLoggedIn } = this.props;
    // console.log('nav window', this.props);
    return (
      <div className="nav">
        <>
          {!isUserLoggedIn ? (
            <>
              <NavLink className="button" to="/">
                <AiOutlineLogin />
              </NavLink>
              <NavLink className="button" to="/add-new-profile">
                <BsPersonPlusFill />
              </NavLink>
            </>
          ) : (
            <>
              {/* <NavLink className="button" to="/profile">
                <BsFillPersonFill />
              </NavLink> */}
              <NavLink className="button" to="/profile/posts">
                <BsFillPersonFill />
              </NavLink>
              <NavLink className="button" to="/" onClick={this.logoutHandler}>
                <AiOutlineLogout />
              </NavLink>
            </>
          )}
        </>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => {
              return (
                <Modal>
                  <LoginBody {...routeProps} />
                </Modal>
              );
            }}
          />
           <Route
            exact
            path="/login"
            render={(routeProps) => {
              return (
                <Modal>
                  <LoginBody {...routeProps} />
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
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state.loginreducer.isUserLoggedIn);
  return {
    isUserLoggedIn: state.loginreducer.isUserLoggedIn
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
