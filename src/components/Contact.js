import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

export default function Contact(){
    return(
        
        <Container>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contactez Nous
      </h2>
      
      <Row>
        <Col md="9" className="md-0 mb-5">
          <Form>
            <Row>
              <Col md="6">
                <div className="md-form mb-0">
                    <Form.Label>Votre Noms: </Form.Label>
                  <Form.Control type="text" id="contact-name" label="Your name" />
                </div>
              </Col>
              <Col md="6">
                <div className="md-form mb-0">
                    <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    id="contact-email"
                    label="Your email"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="md-form mb-0">
                <Form.Label>Sujet:</Form.Label>
                  <Form.Control type="text" id="contact-subject" label="Subject" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="md-form mb-0">
                <Form.Label>Message:</Form.Label>
                  <Form.Control
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </div>
              </Col>
            </Row>
          </Form>
          <div className="text-center text-md-left">
          <br />
            <Button className="primary md">
              Send
            </Button>
          </div>
        </Col>
        <Col md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <Button icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Limbe, Cameroun</p>
            </li>
            <li>
              <Button icon="phone" size="2x" className="blue-text mt-4" />
              <p>+ 237 652 121 137</p>
            </li>
            <li>
              <Button icon="envelope" size="2x" className="blue-text mt-4" />
              <p>contact@example.com</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
       
    );
}