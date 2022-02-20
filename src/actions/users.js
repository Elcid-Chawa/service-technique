import { _getUser } from "../utils/_DATA";

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}