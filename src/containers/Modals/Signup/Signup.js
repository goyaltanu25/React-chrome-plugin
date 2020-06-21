import React, { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { signup } from "../../../redux/Signup/SignupActions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  SignupHandler = (event) => {
    // console.log("coming from signup", this.state);
    event.preventDefault();
    let { email, password, displayName, src } = this.state;
    this.props.signup(email, password, displayName, src, this.props);
    console.log("signup props", this.props);
  };
  render() {
    let { isSignupSuccess, isSignupError } = this.props;
    console.log("signupprops", this.props);
    return (
      <>
        <Form className="portal-form">
          <h3 style={{ textAlign: "center" }}> Signup Details</h3>
          <hr className="hr-line" />
          {isSignupSuccess && (
            <Alert variant="success">Successfully Signed Up!!</Alert>
          )}
          {isSignupError ? (
            <Alert variant="danger">{isSignupError.message}</Alert>
          ) : null}
          <Form.Group controlId="userEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              onChange={(event) =>
                this.setState({
                  email: event.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="userName">
            <Form.Label>Display name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Display Name"
              onChange={(event) =>
                this.setState({
                  displayName: event.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="userImg">
            <Form.Label>Upload Image:</Form.Label>
            <Form.Control
              required
              type="file"
              placeholder="Upload file"
              onChange={(event) =>
                this.setState({
                  src: event.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="userPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter Your Password"
              onChange={(event) =>
                this.setState({
                  password: event.target.value,
                })
              }
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
              this.SignupHandler(event);
            }}
          >
            Signup
          </Button>
          <br />
          <Alert.Link>Back to Login </Alert.Link>
          {/* <br />
          <Button variant="danger" onClick={signInWithGoogle} block>
            Login with Google
          </Button> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignupSuccess: state.signupReducer.isSignupSuccess,
    isSignupError: state.signupReducer.isSignupError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, password, displayName, src, props) =>
    dispatch(signup(email, password, displayName, src, props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
