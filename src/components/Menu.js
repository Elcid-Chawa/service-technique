import React, {Component} from "react";
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { unsetAuthedUser } from "../actions/authUser";
import { handleLogout } from "../actions/login";

class Menu extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.dispatch(unsetAuthedUser(this.props.authedUser));
        this.props.dispatch(handleLogout(this.props.authedUser));
    }
    render(){
        const { user, authedUser} = this.props;
        return(
            <div >
                <ul>
                    <li><NavLink to="/">Dashboard</NavLink></li>
                    {authedUser === 'admin' && <li><NavLink to="/add">New Product</NavLink></li>}
                    { authedUser !== ( null || undefined) && <li onClick={this.handleClick}><NavLink to='/login' > Logout</NavLink></li>}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser, login}){
    const user = users[authedUser]
    return {
        authedUser,
        user: user,
        login,
        
    }
}

export default connect(mapStateToProps)(Menu);