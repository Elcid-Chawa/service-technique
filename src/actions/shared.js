import { getInitialData } from "../utils/api";
import { receiveProducts } from "./products";
import { receiveUsers } from "./users";


export function handleInitialData(){
    return (dispatch) => {
       return getInitialData()
        .then(({users, products}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveProducts(products))
        })
    } 
}