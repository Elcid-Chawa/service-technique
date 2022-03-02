import React from "react";
import { Container, Row } from "react-bootstrap";
import achats3 from '../assets/img/achats3.jpg'

export default function Header(){
    return(
        <header className="bd-header bg-image py-5"
        style={{ 
            backgroundImage: `url(${achats3})`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <Container 
                style={{
                    display: "flex",
                    
                }} >
                <Row style={{paddingLeft: '50%'}}>
                    <h1 className="text-black" >SERVICE TECHNIQUE</h1>
                </Row>
                 
            </Container>
        </header>
        
    )
}