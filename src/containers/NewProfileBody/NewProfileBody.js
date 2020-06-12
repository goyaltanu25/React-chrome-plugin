import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class NewProfileBody extends Component {
  render() {
    return (
      <>
        <Form className="portal-form">
          <h3 style={{ textAlign: "center" }}> Profile Details</h3>
          <hr className="hr-line" />
          <Form.Group controlId="avatarname">
            <Form.Label>Avatar Name :</Form.Label>
            <Form.Control type="text" placeholder="Enter Avatar Name" />
          </Form.Group>
          <Form.Group controlId="itemDescription">
            <Form.Label>Upload Image:</Form.Label>
            <Form.Control required type="file" placeholder="Upload file" />
          </Form.Group>
        </Form>
        <Button type="submit" id="submitbtn" variant="primary">
          Add
        </Button>
      </>
    );
  }
}
