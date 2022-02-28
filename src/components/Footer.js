import React from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";

export default function Footer(){
    return(
        <footer className="bd-footer py-5 mt-5 bg-dark">
            <Container className="bg-image ">
                <Row>
                    <Col className='mb-3 text-white'>
                        <a className="d-inline-flex align-itms-center mb-2 text-decoration-none" href="/">Logo</a>
                        <ul className="list-unstyled small text-muted">
                            <li className="mb-2">Service Technique</li>
                            <li className="mb-2">All rights reserved</li>
                            <li className="mb-2">Copyright 2022</li>
                        </ul>

                    </Col>

                    <Col className="col-6 col-lg-2 mb-3 text-white">
                        <h5>Services</h5>
                        <ul className="list-unstyled text-muted">
                            <li>Gèrer les installations</li>
                            <li>Service Maintenance</li>
                            <li>Service D'Achats</li>
                            <li>Service D'Administration</li>
                            <li>Service D'Interventions</li>
                            <li>Mission</li>
                            <li>Personnels</li>
                        </ul>
                    </Col>
                    <Col className="col-6 col-lg-2 mb-3 text-white">
                        <h5>Contact</h5>
                        <ul className="list-unstyled text-muted">
                            <li>Limbe, Cameroun</li>
                            <li>+ 237 652 121 137</li>
                            <li>contact@example.com</li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}