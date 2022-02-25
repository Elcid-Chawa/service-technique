import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Header(){
    return(
        <header className="bd-header bg-image py-5 "
        style={{ 
            backgroundImage: `url(https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617553__340.jpg)`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <Container 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }} >
                <Row>
                    <h1 className="text-white">Service Technique</h1>
                </Row>
                 
            </Container>
        </header>
        
    )
}