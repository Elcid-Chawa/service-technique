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
                            src={require('../assets/img/installation.jpg')}
                            alt="sunset" />
                        <Carousel.Caption >
                            <h1>Gèrer les installations</h1>
                            <p>Installation Hydraulique Interne des cuisines et verifications des evacuations.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50" 
                            src={require('../assets/img/maintenance2.jpg')}
                            alt="sea" />
                        <Carousel.Caption>
                            <h1>Service Maintenance</h1>
                            <p>Maintenance des chambres froides, frigo, congelateurs.</p>
                            <p>Maintenance des foyers a gaz.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50" 
                            src={require('../assets/img/achats3.jpg')}
                            
                            alt="achats" />
                        <Carousel.Caption >
                            <h1>Service D'Achats</h1>
                            <p>Achats des table de travail, chariots, des marmites chauffantes electriques.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50" 
                            src="https://cdn.pixabay.com/photo/2019/09/04/11/49/men-4451375_960_720.png"
                            alt="sea" />
                        <Carousel.Caption>
                            <h1>Service D'Administration</h1>
                            <p>A lot of services</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50" 
                            src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"
                            alt="sea" />
                        <Carousel.Caption>
                            <h1>Service D'Interventions</h1>
                            <p>A lot of services</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50" 
                            src={require('../assets/img/mission.jpeg')}
                            alt="sea" />
                        <Carousel.Caption>
                            <h1>Mission</h1>
                            <p>Entretien generale de chambre froid.</p>
                            <p>- Verifications des installations a gaz et maintenance des foyers.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100 h-50"
                        src={require('../assets/img/home_page.jpeg')}
                        alt="window" />
                    <Carousel.Caption>
                            <h1>Personnels</h1>
                            <p>A lot of services</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            
            <Row className="mt-4 mb-4">
                <Col>
                    <Card className="text-center">
                        <Card.Header className="bg-image hover-overlay ripple">
                            <img 
                                src={require('../assets/img/maintenance.jpeg')}
                                alt="maintenance"
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
                                src={require('../assets/img/achats4.jpeg')}
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