import React, { Component } from "react";

import { FaShareAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <Container fluid>
          <div className="gradient-fill"></div>
          <div className="profile-container">
            <div className="profile-content">
              <div className="profile-left">
                <div className="profile-img"></div>
                <div className="userdetails-">
                  <div className="userid">@tanugoyal</div>
                  <div className="username">Tanu Goyal</div>
                </div>
              </div>
              <div className="profile-right">
                <div className="social">
                  <a className="href">
                    <span className="counter">0</span>
                    <label className="label">Followers</label>
                  </a>
                  <a className="href">
                    <span className="counter">0</span>
                    <label className="label">Followers</label>
                  </a>
                </div>
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
    )
  }
}

export default Profile;