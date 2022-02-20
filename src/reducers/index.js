import { combineReducers } from 'redux';
import authedUser from './authUser';
import users from './users';
import products from './products';
import login from './login';

export default combineReducers({
    authedUser,
    users,
    login,
    products,
});