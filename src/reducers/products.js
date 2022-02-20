import { ADD_PRODUCT, RECEIVE_PRODUCTS } from "../actions/products";

export default function products (state = {}, action){
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products
            }

        case ADD_PRODUCT: 
            return {
                ...state,
                [action.product.id]: action.product
            }

        default :
            return state
    }
}