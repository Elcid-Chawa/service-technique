import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import achats3 from '../assets/img/achats3.jpg'

export default function Header(){
    return(
        <Row 
        className="align-items-center"
        style={{ 
            backgroundImage: `url(${achats3})`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            height: "500px"
        }}
        
        >
            <Col className="justify-content-left aling-items-start text-white"
                style={{paddingLeft: "50px"}}
            >                
                <h1 style={{fontSize: "60px", color: "orange"}} >SERVICE TECHNIQUE BIR</h1>
                <p style={{fontSize: "20px",width:"50%"}}>Un service technique qui gère les installations, les maintenance, les achats, les devis, le personnel, l administration, les missions, les interventions sur tous les appareils (électriques, chambre froide , clim, foyers, frigos, fours)  tout ce qui concerne l’industrie .</p>
                <Button style={{backgroundColor: "orange"}}>Nos service</Button>
            </Col>
            
        </Row>
        
        
    )
}