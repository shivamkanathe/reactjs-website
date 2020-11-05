import React from 'react'
import {Button,Image,Row,Col}from 'react-bootstrap';
import svgImage from "../images/photos.png";
function Home() {
    return (
        <div className="container main">
            <Row>
            <Col className="colum" md={6} sm={12}>
          <div className="res">
          <h5 className="heading">WELCOME TO GRETURE</h5>
                <h1>Best Working Managment <br/> Apps in Universes</h1>

            <div className="center-button">
            <Button className="btn">GET STARTED</Button>
            </div> 
              </div> 
            </Col>
            <Col md={6} sm={12}>
            <div className=" images">
                <Image className="img" src={svgImage} alt="ffffjjj" />
            </div>
                
            </Col>
            </Row>
        </div>
    )
}

export default Home
