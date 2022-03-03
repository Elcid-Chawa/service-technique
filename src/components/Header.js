import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import achats3 from '../assets/img/achats3.jpg'

export default function Header(){
    return(
        <Row className="align-items-center">
            <Container className="d-flex bd-header bg-image justify-content-center aling-items-center"
            style={{ 
                backgroundImage: `url(${achats3})`, 
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                height: "500px"
            }}>                
                    
            </Container>
            <Container className="justify-content-center aling-items-center"><h1 className="text-black py-" >SERVICE TECHNIQUE</h1></Container>
        </Row>
        
        
    )
}