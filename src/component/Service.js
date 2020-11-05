import React from "react";
import { Row, Card,Col} from "react-bootstrap";
import web from '../images/web.png';
import mobile from '../images/mobile.png';
import design from '../images/photos.png';


function Service() {
  return (
    <div className="container service text-center">
        <h2 className='head'>Our Services</h2>
      <Row className="rows">
        <Col md={4} sm={12}>
          <Card className="card-c">
            <Card.Img className="card-img" variant="top" src={web} alt='hhhh' />
            <Card.Body>
              <Card.Title className='title'>Web Development</Card.Title>
              <Card.Text>
               Web development is in high demand and used in many field of the work to represent that.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="card-c">
            <Card.Img className="card-img" variant="top" src={mobile} alt='hhhh' />
            <Card.Body>
              <Card.Title className='title'>Mobile App</Card.Title>
              <Card.Text>
              Mobile development is in high demand and used in many field of the work to represent that.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="card-c">
            <Card.Img className="card-img"  variant="top" src={design} alt='hhhh' />
            <Card.Body>
              <Card.Title className='title'>Design Apps</Card.Title>
              <Card.Text>
              Design development is in high demand and used in many field of the work to represent that.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Service;
