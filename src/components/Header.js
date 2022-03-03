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
                <Container className="d-flex justify-content-center aling-items-center py-51"><h1 className="text-black" >SERVICE TECHNIQUE</h1></Container>    
            </Container>
            
        </Row>
        
        
    )
}