import React from "react";
import { 
    Container, 
    Row, 
    Col, 
    Card,
    Image
    } from "react-bootstrap";

export default function Main(){
    return(
        <>
            <Container className="d-flex justify-content-center flex-column  mb-3">
                <Container className=" mt-5 d-flex justify-content-center">
                        <h1 id="service">DEFINITION</h1>
                    </Container>
                <Container 
                    className="mt-2 d-flex justify-center aling-items-center"
                >
                    <p style={{textAlign: 'center'}}>Le <b>SERVICE TECHNIQUE</b> réalise et assure l'assistance et le support <b>technique</b> auprès des bases nationales du BIR en vue de prévenir et de résoudre des problèmes <b>techniques</b> d'exploitation et d'entretien par le traitement de questions et l'apport de solutions <b>techniques</b> selon des impératifs de qualité et de délais.</p>
      
                </Container >

            </Container>
            
            
            <Container className="d-flex justify-content-center flex-column  mb-3">
                    <Container className="mt5 d-flex justify-center aling-items-center"
                        className="mt5 mb-5"
                        style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: 'center',                           
                        }}
                    >
                        <h1>OBJECTIFS</h1>
                    </Container>
                    <Row className="justify-content-center align-items-center">
                        <Col >
                        <Row className="align-items-center">
                            <Col className="col-2"><img src={require('../assets/img/sutainable-process.png')} /></Col>
                            <Col className="col-8">Il conçoit, met en œuvre, contrôle et évalue les plans d'actions qui concourent à sa réalisation.</Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col className="col-2"><img src={require('../assets/img/sutainable-process.png')} /></Col>
                            <Col className="col-8">Un diagnostic et une résolution rapide des pannes,</Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col className="col-2"><img src={require('../assets/img/sutainable-process.png')} /></Col>
                            <Col className="col-8">Une gestion efficace du savoir de l’équipe support,</Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col className="col-2"><img src={require('../assets/img/sutainable-process.png')} /></Col>
                            <Col className="col-8">Une orientation des usages des utilisateurs</Col>
                        </Row>
                        
                        </Col>
                        <Col >
                            <img 
                                src={require('../assets/img/maintenance2.jpg')}
                                width="50%"
                                fluid 
                            />
                        </Col>
                    </Row> 
            </Container>
            
            <Container className="d-flex justify-content-center flex-column mb-3">
                    <Container className="d-flex justify-content-center">
                        <h1 id="service">Tous Les Services</h1>
                    </Container>
                        <Row>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/maintenance4.png')} className="card-img-top" alt="..." />
                                    <Card.Title>MAINTENANCES</Card.Title>
                                    <Card.Body></Card.Body>
                                </Card>
                                
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/installation2.jpg')} className="card-img-top" alt="..." />
                                    <Card.Title>INSTALLATIONS</Card.Title>
                                    <Card.Body></Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/intervension.jpg')} className="card-img-top" alt="..." />
                                    <Card.Title>INTERVENTIONS</Card.Title>
                                    <Card.Body></Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/mission.png')} className="card-img-top" alt="..." />
                                    <Card.Title>MISSION</Card.Title>
                                    <Card.Body></Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/images.png')} className="card-img-top" alt="..." />
                                    <Card.Title>ADMINISTRATION</Card.Title>
                                    <Card.Body></Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/personnel.jpg')} className="card-img-top" alt="..." />
                                    <Card.Title>PERSONNELS</Card.Title>
                                    <Card.Body></Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/cart.png')} className="card-img-top" alt="..." />
                                    <Card.Title>ACHATS</Card.Title>
                                    <Card.Body></Card.Body>
                                </Card>
                            </Col>
                            <Col className="m-3 text-center">
                                <Card>
                                    <img src={require('../assets/img/devis.png')} className="card-img-top" alt="..." />
                                    <Card.Title>DEVIS</Card.Title>
                                    <Card.Body></Card.Body>
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
            <Row>
                <Container 
                    className="justify-content-center mb-3"
                    style={{
                        backgroundColor: "darkgrey",
                        height:"500px"
                    }} 
                
                >
                    <Container className="d-flex justify-content-center">
                            <h1 className="text-white">ADMINISTRATION</h1>
                    </Container>
                    <Row className="justify-content-center align-items-center"
                        style={{height:"500px"}}
                    >
                        <Col xs={4} className="m-3 text-center">
                            <Card 
                                className="align-items-center text-white" 
                                style={{backgroundColor:"darkgrey",  width:'18rem'}} >
                                <Image src={require('../assets/img/images.png')}
                                    roundedCircle 
                                    style={{borderBottom: "3px solid red", height: "50%", width:"50%"}}
                                    alt="..." />
                                <Card.Title className="py-3">M. BERNADO CLEMEMET</Card.Title>
                                <Card.Body>Responsable Service Technique du BIR</Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} className="m-3 text-center">
                            <Card 
                                className="align-items-center text-white" 
                                style={{backgroundColor:"darkgrey", width:'18rem'}}>
                                <Image src={require('../assets/img/images.png')} 
                                    variant="top"
                                    className="rounded d-block"
                                    roundedCircle
                                    style={{borderBottom: "3px solid red", height: "50%", width:"50%"}}
                                    alt="..." />
                                <Card.Title className="py-3">M. AMOGA JEHU</Card.Title>
                                <Card.Body>Responsable Adjoint Service Technique du BIR</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container> 
            </Row>
            
            
        </>
    )
}