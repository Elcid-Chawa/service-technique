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
            <Container className="d-flex justify-content-center flex-column  mb-3 mt-5">
                <Container 
                    className="mt5 mb-5"
                    style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center', 
                        paddingTop: "10px",
                    }}
                >
                        <h1 id="service">DEFINITION</h1>
                        <span>________</span>
                    </Container>
                <Container 
                    className="mt-2 d-flex justify-center aling-items-center"
                >
                    <p style={{textAlign: 'center'}}>Le <b>SERVICE TECHNIQUE</b> réalise et assure l'assistance et le support <b>technique</b> auprès des bases nationales du BIR en vue de prévenir et de résoudre des problèmes <b>techniques</b> d'exploitation et d'entretien par le traitement de questions et l'apport de solutions <b>techniques</b> selon des impératifs de qualité et de délais.</p>
      
                </Container >

            </Container>
            
            
            <Container className="d-flex justify-content-center flex-column  mb-3 mt-5">
                    <Container 
                        className="mt5 mb-5"
                        style={{
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: 'center', 
                            paddingTop: "10px",
                        }}
                    >
                        <h1>OBJECTIFS</h1>
                        <span>________</span>
                    </Container>
                    
                    <Row className="justify-content-center align-items-center">
                        <Col className="justify-content-end" >
                            <img 
                                src={require('../assets/img/maintenance2.jpg')}
                                width="70%"
                                fluid 
                            />
                        </Col>
                        <Col >
                        <Row className="align-items-center">
                            <Col className="align-items-center">
                               <div style={{float:"left"}}><img src={require('../assets/img/sutainable-process.png')} fluid /></div>
                               <div>Il conçoit, met en œuvre, contrôle et évalue les plans d'actions qui concourent à sa réalisation.</div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col >
                                <div style={{float: "left"}}><img src={require('../assets/img/sutainable-process.png')} fluid /></div>
                                <span>Un diagnostic et une résolution rapide des pannes,</span>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col >
                            <div style={{float: "left"}}><img src={require('../assets/img/sutainable-process.png')} fluid /></div>
                                <span>Une gestion efficace du savoir de l’équipe support,</span>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col >
                            <div style={{float: "left"}}><img src={require('../assets/img/sutainable-process.png')} fluid /></div>
                                <span>Une orientation des usages des utilisateurs</span>
                            </Col>
                        </Row>
                        
                        </Col>
                    </Row> 
            </Container>
            
            <Row className="d-flex justify-content-center flex-column mb-3 mt-5">
                    <Container 
                        className="d-flex justify-content-center align-items-center"
                        style={{ 
                            height: "200px", 
                            backgroundColor: "beige",
                            backgroundAttachment: "fixed"
                        }}
                    >
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
                    
            </Row>
            
            <Row className="d-flex justify-content-center flex-column mb-3 mt-5">
                <Container className="d-flex justify-content-center align-items-center"
                    style={{ 
                        height: "200px", 
                        backgroundColor: "beige",
                        backgroundAttachment: "fixed"
                    }}
                >
                    <h1 id="project">Nos Projets</h1>
                </Container>
                
                  <Row>
                      <Row>
                        <Col className="col-6"
                        >
                            <Image src={require('../assets/img/mission.jpeg')} fluid />
                        </Col>
                        <Col className="col-3">
                            <Image src={require('../assets/img/cable.jpeg')} fluid />
                        </Col>
                        <Col className="col-3">
                            <Image src={require('../assets/img/gas_bottle.jpeg')} fluid />
                        </Col> 
                    </Row>
                    <Row>
                        <Col className="col-6">
                            <Image src={require('../assets/img/maintenance2.jpg')} fluid />
                        </Col>
                        <Col className="col-6">
                            <Image src={require('../assets/img/home_page.jpeg')} fluid />
                        </Col>
                    </Row>     
                    
                </Row>
            </Row>

            <Row className="d-flex justify-content-center mb-3 mt-5 flex-column" 
                style={{
                    backgroundColor: "darkgrey",
                    
                }} 
                
            >
                    <Container 
                        className="d-flex justify-content-center aling-items-center flex-column mb-5"
                        style={{
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: 'center', 
                            paddingTop: "10px",
                            color: "white"
                        }}
                    >
                            <h1>ADMINISTRATION</h1>
                            <span>______</span>
                    </Container>
                    <Row className="justify-content-center align-items-center">
                        <Col xs={4} className="m-3 text-center">
                            <Card 
                                className="align-items-center text-white" 
                                style={{backgroundColor:"darkgrey",  width:'18rem'}} >
                                <Image src={require('../assets/img/images.png')}
                                    roundedCircle 
                                    style={{borderBottom: "3px solid red", height: "50%", width:"50%"}}
                                    alt="..." />
                                <Card.Title >M. BERNADO CLEMEMET</Card.Title>
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
                                <Card.Title>M. AMOGA JEHU</Card.Title>
                                <Card.Body>Responsable Adjoint Service Technique du BIR</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                
            </Row>
            
            
        </>
    )
}