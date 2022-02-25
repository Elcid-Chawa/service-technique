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
        const { authedUser} = this.props;
        return(
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand>Logo</Navbar.Brand>
                    <Nav className="justify-content-center" activeKey="/dashboard">
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link className="text-white" to="/"  as={NavLink}>Accueil</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link to="/" className="text-white"  as={NavLink}>Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link className="text-white" eventKey="link-1"  as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {authedUser === 'root' && <Nav.Link className="text-white" eventKey="link-2"  as={NavLink} to="/add">Service</Nav.Link>}
                        </Nav.Item>
                        { (authedUser !==  null)                        
                            ? (<Nav.Item onClick={this.handleClick}>
                                    <Nav.Link className="text-white" as={NavLink} eventKey="link-3" to='/login'>Déconnexion</Nav.Link>
                                </Nav.Item> )
                            : (<Nav.Item><Nav.Link className="text-white" as={NavLink} to='/login' >
                                Connexion
                            </Nav.Link></Nav.Item> )
                        }
                    </Nav>
                </Container>
            </Navbar>
            
            
        )
    }
}

function mapStateToProps({users, authedUser, login}){

    return {
        authedUser,
        login,
        
    }
}

export default connect(mapStateToProps)(Menu);