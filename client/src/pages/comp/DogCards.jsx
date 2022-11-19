import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import unImg from "../../img/unknownDog.jpg"
export default class DogCards extends React.Component {
  state = {
    dogC: [],
  };

  componentDidMount() {
    axios.get(`/dogs`)
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
        <Row xs={1} md={3} className="g-4 align-items-center">
          {this.state.dogC.map((_, idx) => (
            <Col key={this.state.dogC[idx]._id}>
              <Card>
                {this.state.dogC[idx].photos === "" ? (
                  <img src={unImg} className="card-img-top"  style={{maxHeight: "500px"}} alt="..."/>                  
                  ) : (
                    <img src={this.state.dogC[idx].photos} className="card-img-top"  style={{maxHeight: "500px", minHeight: "300px"}} alt="Dog photos"/>
                )}
                <Card.Body className="overflow-auto" style={{maxHeight: "150px"}}>
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
