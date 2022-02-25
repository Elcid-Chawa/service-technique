import React from "react";
import { 
    Container, 
    Row, 
    Col, 
    Carousel, 
    Card 
    } from "react-bootstrap";

export default function Main(){
    return(
        <Container>
            <Row>
                <Container
                className="bg-image p-5 mb-1 mt-1 text-center shadow-1-strong rounded "
                 >
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
                    <Row>

                    </Row>
                </Container> 
            </Row>

                <Carousel>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100 h-50"
                            src="https://cdn.pixabay.com/photo/2022/02/08/09/03/window-7001026_960_720.jpg"
                            alt=" Test image" />
                        <Carousel.Caption>
                            <h1>Service</h1>
                            <p>A lot of services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100 h-50"
                            src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg"
                            alt=" Test image" />
                        <Carousel.Caption>
                            <h1>Service3</h1>
                            <p>A lot of services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50" 
                            src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"
                            alt=" Test image" />
                        <Carousel.Caption>
                            <h1>Service2</h1>
                            <p>A lot of services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            
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
                                src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"
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