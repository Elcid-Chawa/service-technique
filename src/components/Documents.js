import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { useParams } from "react-router";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import { Col, Container, Row } from "react-bootstrap";

function getImagePaths(directory){
    let images = [];
  directory.keys().map((item, index) => images.push(item.replace("./", "")));
  return images;
}

function PDFDocs(props){
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }){
        setNumPages(numPages);
    }

    const { filepath, filename } = useParams();
    const  pdf = require(`../assets/docs/${filename}.pdf`);
    let p = "../assets/docs";
    //const files = require.context(p, false, /\.(png|jpe?g|svg|pdf)$/);
    //console.log(getImagePaths(files))
    
    return (
        <Container>
            <Row>
                <Col>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                        <div style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            <Viewer fileUrl={pdf} />
                        </div>
                    </Worker>
                </Col>
            </Row> 
        </Container>
        
        
    );
}



export default PDFDocs;