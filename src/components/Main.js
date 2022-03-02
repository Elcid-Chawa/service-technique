import React from "react";
import { 
    Container, 
    Row, 
    Col, 
    Card,
    } from "react-bootstrap";

export default function Main(){
    return(
        <>
            <Row>
                <Container fluid
                    className="mt5"
                    style={{
                        display: 'flex',
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: 'center',
                        
                    }}
                >
                    <h3>DEFINITION</h3>
                             
                </Container>
                <Container 
                    className="mt5 d-flex justify-center aling-items-center"
                    style={{
                        width: '50%',
                        height: '100%'
                    }}
                >
                    <p style={{textAlign: 'center'}}>Le <b>SERVICE TECHNIQUE</b>réalise et assure l'assistance et le support <b>technique</b> auprès des bases nationales du BIR en vue de prévenir et de résoudre des problèmes <b>techniques</b> d'exploitation et d'entretien par le traitement de questions et l'apport de solutions <b>techniques</b> selon des impératifs de qualité et de délais.</p>
      
                </Container >

            </Row>
            
            
            <Row >
                    <Container className="mt5 d-flex justify-center aling-items-center"
                        className="mt5 mb-5"
                        style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: 'center',                           
                        }}
                    >
                        <h3>OBJECTIFS</h3>
                    </Container>
                    <Col className="px-5">
                        <img src={require('../assets/img/maintenance2.jpg')} />
                    </Col>
                    <Col>
                        <Row className="align-items-center">
                            <Col className="col-2"><img src={require('../assets/img/sutainable-process.png')} /></Col>
                            <Col className="col-5">Il conçoit, met en œuvre, contrôle et évalue les plans d'actions qui concourent à sa réalisation.</Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col className="col-2"><img src={require('../assets/img/sutainable-process.png')} /></Col>
                            <Col className="col-5">Un diagnostic et une résolution rapide des pannes,</Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col className="col-2"><img src={require('../assets/img/sutainable-process.png')} /></Col>
                            <Col className="col-5">Une gestion efficace du savoir de l’équipe support,</Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col className="col-2"><img src={require('../assets/img/sutainable-process.png')} /></Col>
                            <Col className="col-5">Une orientation des usages des utilisateurs</Col>
                        </Row>
                        
                    </Col>
                    
            </Row>
            
            <Container className="d-flex justify-content-center flex-column mb-3">
                    <Container className="d-flex justify-content-center">
                        <h1 id="service">Tous Les Services</h1>
                    </Container>
                        <Row>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/maintenance4.png')} className="card-img-top" alt="..." />
                                    <Card.Title>MAINTENANCES</Card.Title>
                                    <Card.Body>Some note</Card.Body>
                                </Card>
                                
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/installation2.jpg')} className="card-img-top" alt="..." />
                                    <Card.Title>INSTALLATIONS</Card.Title>
                                    <Card.Body>Some note</Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/intervension.jpg')} className="card-img-top" alt="..." />
                                    <Card.Title>INTERVENTIONS</Card.Title>
                                    <Card.Body>Some note</Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/mission.png')} className="card-img-top" alt="..." />
                                    <Card.Title>MISSION</Card.Title>
                                    <Card.Body>Some note</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/images.png')} className="card-img-top" alt="..." />
                                    <Card.Title>ADMINISTRATION</Card.Title>
                                    <Card.Body>Some note</Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/personnel.jpg')} className="card-img-top" alt="..." />
                                    <Card.Title>PERSONNELS</Card.Title>
                                    <Card.Body>Some note</Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/cart.png')} className="card-img-top" alt="..." />
                                    <Card.Title>ACHATS</Card.Title>
                                    <Card.Body>Some note</Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/devis.png')} className="card-img-top" alt="..." />
                                    <Card.Title>DEVIS</Card.Title>
                                    <Card.Body>Some note</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    
            </Container>
            
            <Container className="d-flex justify-content-center flex-column mb-3">
                <Container className="d-flex justify-content-center">
                    <h1 id="project">Nos Projets</h1>
                </Container>
                
                  <Row>   
                    <Col>Projects</Col>
                </Row>
            </Container>

            <Container className="d-flex justify-content-center flex-column mb-3">
                <Container className="d-flex justify-content-center">
                        <h1>ADMINISTRATION</h1>
                </Container>
                <Row className="align-items-center">
                    <Col>REsponsable</Col>
                    <Col>Responsable Adjoint</Col>
                </Row>
            </Container>
            
        </>
    )
}