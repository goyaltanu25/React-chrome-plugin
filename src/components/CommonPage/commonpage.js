import React from "react";

import "./commonpage.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function commonpage(props) {
  console.log("props", props);
  return (
    <Container fluid className="card-container">
      <Card className="card">
        <Card.Img className="card-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhhAz4jXJBtNd8Dve5LHyM3TzZpcYuecRy8IrMT7aOFMXA6zta&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img className="card-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPS6jyH073iKlY4IcC57h4jDN5UmuRB6ns142C8by3UGiDcFHn&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img className="card-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQADPqZPixDY5QtpjW00qem7MSvFbEwBIyDlH0aaTmCp5XsKTi&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default commonpage;

