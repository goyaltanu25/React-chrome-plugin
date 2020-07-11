import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";
import Modal from "../Modals/Modal";
import Signup from "../Modals/Signup/Signup";
import LoginBody from "../Modals/Login/LoginBody";
import { logout } from "../../redux/Login/LoginActions";
import { BsFillPersonFill, BsPersonPlusFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { AiOutlineLogin, AiOutlinePlus, AiOutlineLogout } from "react-icons/ai";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logoutHandler = () => {
    this.props.logout();
  };

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
              <NavLink className="button" to="/profile/posts">
                <BsFillPersonFill />
              </NavLink>
              <NavLink className="button" to="/add">
                <AiOutlinePlus />
              </NavLink>
              <NavLink className="button" to="/share">
                <FaShareAlt />
              </NavLink>
              <NavLink className="button" to="/" onClick={this.logoutHandler}>
                <AiOutlineLogout />
              </NavLink>
              <NavLink className="button" to="/profile">
                <MdCancel />
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
  return {
    isUserLoggedIn: state.loginreducer.isUserLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
