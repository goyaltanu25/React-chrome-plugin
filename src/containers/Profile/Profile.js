import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaShareAlt } from "react-icons/fa";
import { connect } from "react-redux";
import  "./Profile.css";
import Linkpage from "../../components/LinkPage";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { userDetails } = this.props;
    // console.log(this.props,userDetails);

    return (
      <>
        <Container fluid>
          <div className="gradient-fill"></div>
          <div className="profile-container">
            <div className="profile-content">
              <div className="profile-left">
                {userDetails ? (
                  <>
                    <div className="profile-img" alt={userDetails.src}></div>
                    <div className="userdetails-">
                      <div className="userid">{userDetails.email}</div>
                      <div className="username"><strong>{userDetails.displayName}</strong></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="profile-img" alt="test-img"></div>
                    <div className="userdetails-">
                      <div className="userid">testid</div>
                      <div className="username"><strong>testName</strong></div>
                    </div>
                  </>
                )}
              </div>
              <div className="profile-right">
                {/* <div className="social">
                  <div className="hre">
                    <span className="counter">0</span>
                    <label className="label">Followers</label>
                  </div>
                  <div className="hre">
                    <span className="counter">0</span>
                    <label className="label">Following</label>
                  </div>
                </div> */}
                <div className="icon-buttons">
                  <div className="custom-btn">
                    <FaShareAlt />
                  </div>
                  <div className="custom-btn">
                    <Button variant="outline-primary">Settings</Button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <NavLink className="tabs" to="/profile/posts">
            <span>POSTS</span>
          </NavLink>
          <NavLink className="tabs" to="/profile/collections">
          <span>COLLECTIONS</span>
          </NavLink>
          <hr/>
          <Route path="/profile/:link" component={Linkpage} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.loginreducer.userData,
  };
};

export default connect(mapStateToProps)(Profile);
