import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";

export default function Main(){
    return(
        <Container>
            <Row>
                <Container
                className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
                style={{backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp')`, 
                }} >
                    <Row >
                        <Col style={{text:"white"}}>Service Technique</Col>
                        <Col>image</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    Mission
                                </Row>
                            </Container>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    This is the main page
                </Container> 
            </Row>
            <Row>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="First Slide"
                            />
                            <Carousel.Caption>
                                <h3>Service Maintenance</h3>
                                <p>We take care of maintenance services</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="Second Slide"
                            />
                            <Carousel.Caption>
                                <h3>Service Mission</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="3rd Slide"
                            />
                            <Carousel.Caption>
                                <h3>Service Interventions</h3>
                                <p>Sur tout kes appareils electric, chanbre froid, fous...</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container> 
            </Row>
            
            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="bg-image hover-overlay ripple">
                            <img 
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                className="img-fluid"
                            />
                            <div 
                                className="mask" 
                                style={{backgroundClor: `rgba(251, 251, 251, 0.15)`}}>

                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Accueil</Card.Title>
                            <Card.Text>Some characters</Card.Text>
                        </Card.Body> 
                    </Card>
                </Col>
                <Col>
                <Card className="text-center">
                        <Card.Header className="bg-image hover-overlay ripple">
                            <img 
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                className="img-fluid"
                            />
                            <div 
                                className="mask" 
                                style={{backgroundClor: `rgba(251, 251, 251, 0.15)`}}>

                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Accueil</Card.Title>
                            <Card.Text>Some characters</Card.Text>
                        </Card.Body> 
                    </Card>
                </Col>
                <Col>
                <Card className="text-center">
                        <Card.Header className="bg-image hover-overlay ripple">
                            <img 
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                className="img-fluid"
                            />
                            <div 
                                className="mask" 
                                style={{backgroundClor: `rgba(251, 251, 251, 0.15)`}}>

                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Accueil</Card.Title>
                            <Card.Text>Some characters</Card.Text>
                        </Card.Body> 
                    </Card>
                </Col>
            </Row> 

            <Row>
                <Col className="text-white" style={{backgroundColor: "black"}}>
                    SOme column
                </Col>
            </Row> 
        </Container>
    )
}