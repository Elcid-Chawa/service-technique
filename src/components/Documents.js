import React from "react";
import { Document, Page } from "react-pdf";

import sampleFile from '../assets/docs/doc1.pdf'

export default function PDFDocs(){
    return (
        <Document file={sampleFile}>
            <Page pageNumber={1} />
        </Document>
    );
}