import React, { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { auth, signInWithGoogle } from "../../../firebase";
import "./LoginBody.css";

export default class LoginBody extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  signInWithEmailAndPasswordHandler(event) {
    // console.log('signin props',this.props);
    event.preventDefault();
    //After Login,navigate to Profilepage
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>
        {
          this.props.history.push("/profile");
          console.log(this.props.match.params.name);
        }
      )
      .catch((error) => {
        this.setState({
          ...this.state,
          error: "Error signing in with password and email!",
        });
        console.error("Error signing in with password and email", error);
      });
  }
  changeHandler = (event) => {
    if (event.target.id === "userEmail") {
      this.setState({
        ...this.state,
        email: event.target.value,
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
          <h3 style={{ textAlign: "center" }}> Login Here</h3>
          <hr className="hr-line" />
          {this.state.error ? <Alert variant='danger'>{this.state.error}</Alert>: null}
          <Form.Group controlId="userEmail">
            <Form.Label>Your Email :</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              onChange={this.changeHandler}
            />
          </Form.Group>
          <Form.Group controlId="userPassword">
            <Form.Label>Avatar Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter your Password"
              onChange={this.changeHandler}
            />
          </Form.Group>
        </Form>
        <div className="form-btn">
          <Button
            style={{ margin: "0rem 9rem" }}
            type="submit"
            variant="primary"
            onClick={(event) => {
              this.signInWithEmailAndPasswordHandler(event);
            }}
          >
            Login
          </Button>
          <Alert.Link>Forgot Password?</Alert.Link>
          or
          <Button variant="danger" block 
          onClick={signInWithGoogle}>
            Login with Google
          </Button>
        </div>
      </>
    );
  }
}
