import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


function Dashboard (props) {
    const location = useLocation();

    if(props.authedUser === null || undefined){
        
        return <Navigate to="/login" state={{from: location}} replace />
    }

     function mapProducts() {
        
        return(
               props.allProducts.map((id) => (
                        <tr key={id}>
                            <td>{props.products[id].id}</td>
                            <td>{props.products[id].name}</td>
                            <td>{props.products[id].qty}</td>
                            <td>{props.products[id].createDate}</td>
                            {props.authedUser === 'root' && <td><button>Edit</button> <button>Delete</button></td>}
                        </tr>
                    )
                )
        )
    }

    return (
        <div >
            <h1>Product Dashboard:</h1>
            
                <Table className='stripped bordered hover'>
                    <thead>
                        <tr>
                            <th>Code: </th>
                            <th>Name:</th>
                            <th>Quantity: </th>
                            <th>Create Date:</th>
                            {props.authedUser === 'admin' && <th>Modify</th>}
                        </tr>
                    </thead>
                    <tbody>
                        { mapProducts()}
                    </tbody>
                </Table>
            </div>
                
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