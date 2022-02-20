import {
    _getUsers,
    _getProducts,
} from './_DATA.js'

export function getInitialData (){
    return Promise.all([
        _getUsers(),
        _getProducts(),
    ]).then(([users, products]) => ({
        users,
        products,
    }))
}