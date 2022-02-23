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
            <Navbar bg="dark" variant="light" className="text-white">
                <Container >
                    <Navbar.Brand>Logo</Navbar.Brand>
                    <Nav className="me-auto" activeKey="/dashboard">
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link href="/">Accueil</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link href="/">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link  eventKey="link-1" href="/dashboard">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {authedUser==='admin' && <Nav.Link  eventKey="link-2" href="/add">New Product</Nav.Link>}
                        </Nav.Item>
                        { (authedUser !==  null)                        
                            ? (<Nav.Item onClick={this.handleClick}>
                                    <Nav.Link  eventKey="link-3" ><NavLink  to='/login'>Logout</NavLink></Nav.Link>
                                </Nav.Item> )
                            : (<Nav.Item><Nav.Link>
                                <NavLink  to='/login'>Login</NavLink>
                            </Nav.Link></Nav.Item> )
                        }
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