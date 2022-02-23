import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { unsetAuthedUser } from "../actions/authUser";
import { handleLogout } from "../actions/login";
import { Container, Nav, Navbar } from "react-bootstrap";

class Menu extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.dispatch(unsetAuthedUser(this.props.authedUser));
        this.props.dispatch(handleLogout(this.props.authedUser));
    }
    render(){
        const { user, authedUser} = this.props;
        return(
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand>Logo</Navbar.Brand>
                    <Nav className="me-auto" activeKey="/dashboard">
                        <Nav.Item>
                            <Nav.Link  eventKey="link-1"><NavLink to="/dashboard">Dashboard</NavLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {authedUser && <Nav.Link  eventKey="link-2"><NavLink to="/add">New Product</NavLink></Nav.Link>}
                        </Nav.Item>
                        <Nav.Item onClick={this.handleClick}>
                            { authedUser !== ( null || undefined) && <Nav.Link  eventKey="link-3"> <NavLink to='/login'>Logout</NavLink></Nav.Link>}
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            
            
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