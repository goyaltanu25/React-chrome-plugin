import React, { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { login } from "../../../redux/Login/LoginActions";
import { connect } from "react-redux";
import "./LoginBody.css";

class LoginBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginHandler(event) {
    event.preventDefault();
    //After Login,navigate to Profilepage
    let { email, password } = this.state;
    this.props.login(email, password, this.props);
  }

  forgotPassword(event){
    event.preventDefault();
  }

  render() {
    let { isLoginPending, isLoginSuccess, isLoginError } = this.props;
    return (
      <>
        <Form className="portal-form">
          <h3 style={{ textAlign: "center" }}> Login Here</h3>
          <hr className="hr-line" />
          {isLoginPending && <Alert variant="primary">Login Please.</Alert>}
          {isLoginSuccess && (
            <Alert variant="success">Successfully Logged-In</Alert>
          )}
          {isLoginError && (
            <Alert variant="danger">{isLoginError.message}</Alert>
          )}
          <Form.Group controlId="userEmail">
            <Form.Label>Your Email :</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="userPassword">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group>
        </Form>
        <div className="form-btn">
          <Button
            style={{ margin: "0rem 9rem" }}
            type="submit"
            variant="primary"
            onClick={(event) => {this.loginHandler(event)}}
          >
            Login
          </Button>
          <Alert.Link onClick={(event)=>this.forgotPassword(event)}>Forgot Password?</Alert.Link>
          {/* or
          <Button variant="danger" block 
          onClick={this.signInHandler(event)}>
            Login with Google
          </Button> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.loginreducer.isLoginPending,
    isLoginSuccess: state.loginreducer.isLoginSuccess,
    isLoginError: state.loginreducer.isLoginError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password, props) => dispatch(login(email, password, props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBody);
