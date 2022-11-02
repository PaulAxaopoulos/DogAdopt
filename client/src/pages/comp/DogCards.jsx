import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default class DogCards extends React.Component {
  state = {
    dogC: [],
  };

  componentDidMount() {
    axios.get(`/api/dogs`)
      .then((res) => {
        const dogC = res.data;
        this.setState({ dogC });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container fluid="md">
        <Row xs={1} md={3} className="g-4">
          {this.state.dogC.map((_, idx) => (
            <Col key={this.state.dogC[idx]._id}>
              <Card>
                <Card.Body>
                  <Card.Title>{this.state.dogC[idx].name}</Card.Title>
                  <Card.Title>{this.state.dogC[idx].phone}</Card.Title>
                  <Card.Text>{this.state.dogC[idx].comments}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
