import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { handleAddProduct } from '../actions/products';

class NewProduct extends Component {

    state = {
        pname: '',
        qty: 0,
        done: false,
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState((currentState) => (
            currentState[e.target.name] = e.target.value
        ));
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if ((this.state.qty !== '') && (this.state.pname !== '')){
           
            this.setState(() => ({
                done: true,
            }))

            this.props.dispatch(handleAddProduct({
                name: this.state.pname,
                qty: this.state.qty
            }))

        }
    }


    render(){
        const { pname, qty, done } = this.state
        console.log(qty, pname, done);

        if(done === true){
            <Navigate to='/' />
        }

        return(
            <div className='from-wrap'>
                <h1>Add New Product: </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Product Name: </label>
                    <br />
                    <input type="text" name='pname' placeholder='product name' value={this.state.pname} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>Quantity: </label>
                    <br />
                    <input type='number' name='qty' value={this.state.qty} onChange={this.handleChange} />
                    <br />
                    <br />
                    <button type="submit">Add Product</button>

                </form>
            </div>
        )
    }
}

function mapStateToProps ({users, products, authedUser}) {
    return {
        users,
        products,
        authedUser
        }
}

export default connect(mapStateToProps)(NewProduct);
