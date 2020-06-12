import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";

import { Route , Switch} from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import { NavLink } from "react-router-dom";

import { BsThreeDotsVertical, BsPersonPlusFill } from "react-icons/bs";
import { MdWork, MdSchool } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import Container from "react-bootstrap/Container";

// import ExtensionContainer from "./containers/Modals/ExtensionModal/ExtensionContainer";
import LinkPage from "../src/components/LinkPage";
import Profile from "./containers/Profile/Profile";
import NewProfilePortalModal from "./containers/Modals/NewProfileModal/NewProfilePortal";

import "./App.css";
import LinksParentPage from "./containers/LinksParentPage/LinksParentPage";
import { BrowserRouter } from "react-router-dom";
import ExtensionContainer from "./containers/Modals/ExtensionModal/ExtensionContainer";

class App extends Component {
  openNewTab(event, route) {
    // console.log(event, route)
    // event.preventDefault();
    window.open(route);
  }
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <ExtensionContainer>
                <div className="nav">
                  <NavLink
                    className="button"
                    to="/profile"
                    onClick={(event) => this.openNewTab(event, "/profile")}
                  >
                    <BsThreeDotsVertical />
                  </NavLink>
                  <NavLink
                    className="button"
                    to="/workplace-NavLinks"
                    onClick={(event) =>
                      this.openNewTab(event, "/workplace-links")
                    }
                  >
                    <MdWork />
                  </NavLink>
                  <NavLink
                    className="button"
                    to="/community-NavLinks"
                    onClick={(event) =>
                      this.openNewTab(event, "/community-links")
                    }
                  >
                    <FaHandsHelping />
                  </NavLink>
                  <NavLink
                    className="button"
                    to="/learning-NavLinks"
                    onClick={(event) =>
                      this.openNewTab(event, "/learning-links")
                    }
                  >
                    <MdSchool />
                  </NavLink>
                  <NavLink
                    className="button"
                    to="/personal-NavLinks"
                    onClick={(event) =>
                      this.openNewTab(event, "/personal-links")
                    }
                  >
                    <GiSelfLove />
                  </NavLink>
                  <NavLink
                    className="button"
                    to="/add-new-profile"
                    onClick={(event) =>
                      this.openNewTab(event, "/add-new-profile")
                    }
                  >
                    <BsPersonPlusFill />
                  </NavLink>
                  <NavLink to="#" className="button">
                    <AiOutlineCloseCircle />
                  </NavLink>
                </div>
              </ExtensionContainer>
            );
          }}
        />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route
            path="/add-new-profile"
            exact
            render={() => {
              return (
                <NewProfilePortalModal>
                  <Form className="portal-form">
                    <h3 style={{ textAlign: "center" }}> Profile Details</h3>
                    <hr className="hr-line" />
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
        {/* <LinksParentPage/> */}
      </BrowserRouter>
    );
  }
}

export default App;
