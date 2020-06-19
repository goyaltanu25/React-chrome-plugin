import React, { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import {
  auth,
  signInWithGoogle,
  generateUserDocument,
} from "../../../firebase";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    additionalData: {
      displayName: "",
      src: "",
    },
  };
  createUserWithEmailAndPasswordHandler = async (event) => {
    // console.log("coming from signup", this.state);
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      // console.log("additionaldata", this.state.additionalData);
      generateUserDocument(user, this.state.additionalData);
      this.props.history.push("/profile");
    } catch (error) {
      this.setState({
        ...this.state,
        error: "Error Signing up with email and password",
      });
    }
    this.setState({
      email: "",
      password: "",
      additionalData: "",
    });
  };

  onChangeHandler = (event) => {
    console.log(event.target);
    if (event.target.id === "userEmail") {
      this.setState({
        ...this.state,
        email: event.target.value,
      });
    } else if (event.target.id === "userName") {
      this.setState({
        ...this.state,
        additionalData: {
          ...this.state.additionalData,
          displayName: event.target.value,
        },
      });
    } else if (event.target.id === "userImg") {
      // console.log(event.target);
      this.setState({
        ...this.state,
        additionalData: {
          ...this.state.additionalData,
          src: event.target.value,
        },
      });
    } else if (event.target.id === "userPassword") {
      this.setState({
        ...this.state,
        password: event.target.value,
      });
    }
  };
  render() {
    return (
      <>
        <Form className="portal-form">
          <h3 style={{ textAlign: "center" }}> Signup Details</h3>
          <hr className="hr-line" />
          <Form.Group controlId="userEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              onChange={(event) => this.onChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group controlId="userName">
            <Form.Label>Display name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Display Name"
              onChange={(event) => this.onChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group controlId="userImg">
            <Form.Label>Upload Image:</Form.Label>
            <Form.Control
              required
              type="file"
              placeholder="Upload file"
              onChange={(event) => this.onChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group controlId="userPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter Your Password"
              onChange={(event) => this.onChangeHandler(event)}
            />
          </Form.Group>
        </Form>
        <div className="form-btn">
          <Button
            type="submit"
            id="submitbtn"
            variant="primary"
            block
            onClick={(event) => {
              this.createUserWithEmailAndPasswordHandler(event);
            }}
          >
            Signup
          </Button>
          <br />
          <Alert.Link>Back to Login </Alert.Link>
          <br />
          <Button variant="danger" onClick={signInWithGoogle} block>
            Login with Google
          </Button>
        </div>
      </>
    );
  }
}
