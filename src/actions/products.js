import { _addProduct } from "../utils/_DATA";

export const RECEIVE_PRODUCTS = 'RECEIVEV_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export function receiveProducts (products){
    return {
        type: RECEIVE_PRODUCTS,
        products,
    }
}

export function addProduct (product){
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function handleAddProduct(product){
    return (dispatch) => {
        return _addProduct(product)
            .then((prod) => dispatch(addProduct(prod)))
    }
}