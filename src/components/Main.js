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
        <>
        <Container className='bg-image mt-2 mb-2'>
            <Carousel >
                <Carousel.Item>
                    <img 
                        className="d-block w-100 h-50"
                        src="https://cdn.pixabay.com/photo/2022/02/08/09/03/window-7001026_960_720.jpg"
                        alt="window" />
                    <Carousel.Caption>
                            <h1>Service</h1>
                            <p>A lot of services</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100 h-50"
                            src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg"
                            alt="sunset" />
                        <Carousel.Caption>
                            <h1>Service3</h1>
                            <p>A lot of services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50" 
                            src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"
                            alt="sea" />
                        <Carousel.Caption>
                            <h1>Service2</h1>
                            <p>A lot of services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            
            <Row className="mt-4 mb-4">
                <Col>
                    <Card className="text-center">
                        <Card.Header className="bg-image hover-overlay ripple">
                            <img 
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                alt="nature"
                                className="img-fluid"
                            />
                            <div 
                                className="mask" 
                                style={{backgroundClor: `rgba(251, 251, 251, 0.15)`}}>

                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Service Maintenance</Card.Title>
                            <Card.Text>Some characters</Card.Text>
                        </Card.Body> 
                    </Card>
                </Col>
                <Col>
                <Card className="text-center">
                        <Card.Header className="bg-image hover-overlay ripple">
                            <img 
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                alt="nature"
                                className="img-fluid"
                            />
                            <div 
                                className="mask" 
                                style={{backgroundClor: `rgba(251, 251, 251, 0.15)`}}>

                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Service D'achats</Card.Title>
                            <Card.Text>Some characters</Card.Text>
                        </Card.Body> 
                    </Card>
                </Col>
                <Col>
                <Card className="text-center">
                        <Card.Header className="bg-image hover-overlay ripple">
                            <img 
                                src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"
                                alt="nature"
                                className="img-fluid"
                            />
                            <div 
                                className="mask" 
                                style={{backgroundClor: `rgba(251, 251, 251, 0.15)`}}>

                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Autre Service</Card.Title>
                            <Card.Text>Some characters</Card.Text>
                        </Card.Body> 
                    </Card>
                </Col>
            </Row> 
            
        </Container>
        </>
    )
}