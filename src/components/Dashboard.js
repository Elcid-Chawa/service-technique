import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import services from './AllDocs';


function Dashboard (props) {
    const location = useLocation();

    function mapProducts() {
        
        return(
               services.map((service, idx) => (
                        <tr key={idx}>
                            <td>{idx}</td>
                            <td>{service.type}</td>
                            <td>{service.title}</td>
                            <td>{service.date}</td>
                            <td>{service.fileName}</td>
                            {props.authedUser === 'root' && <td><button>Edit</button> <button>Delete</button></td>}
                        </tr>
                    )
                )
        )
    }

    return (
        <Row className="d-flex justify-content-center flex-column mb-3 mt-5">
            <Container 
                className="d-flex justify-content-center align-items-center"
                style={{ 
                    height: "200px", 
                    backgroundColor: "beige",
                    backgroundAttachment: "fixed"
                }}
            >
                <h1>TABLEAU DE BORD DU SERVICE</h1>
            </Container>
            
            
                <Table responsive className='striped bordered hover'>
                    <thead>
                        <tr>
                            <th>#: </th>
                            <th>SERVICE: </th>
                            <th>TITRE:</th>
                            <th>DATE: </th>
                            <th>Nom du Fiche</th>
                            {props.authedUser === 'root' && <th>Modify</th>}
                        </tr>
                    </thead>
                    <tbody>
                        { mapProducts()}
                    </tbody>
                </Table>
            </Row>
                
    )
}

function mapStateToProps({users, products, authedUser}){

    const allProducts = Object.keys(products);

    return{
        users,
        products,
        allProducts,
        authedUser
    }
}

export default connect(mapStateToProps)(Dashboard);