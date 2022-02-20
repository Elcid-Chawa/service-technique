import React, {Component } from 'react';
import { connect } from 'react-redux';


class Dashboard extends Component {
render(){

    const { products, allProducts, authedUser } = this.props;
    console.log(allProducts)
    return (
        <div >
            <h1>Product Dashboard:</h1>
            <div className='table-div'>
                <table>
                    <thead>
                        <tr>
                            <th>Code: </th>
                            <th>Name:</th>
                            <th>Quantity: </th>
                            <th>Create Date:</th>
                            {authedUser === 'admin' && <th>Modify</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {   allProducts.map((id) => (
                                <tr key={id}>
                                    <td>{products[id].id}</td>
                                    <td>{products[id].name}</td>
                                    <td>{products[id].qty}</td>
                                    <td>{products[id].createDate}</td>
                                    {authedUser === 'admin' && <td><button>Edit</button> <button>Delete</button></td>}
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
                
        </div>
    )
}
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