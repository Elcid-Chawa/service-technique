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
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={require('../assets/img/logo_bir.png')}
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                            />{' '}
                    </Navbar.Brand>
                    <Nav className="justify-content-center" activeKey="/dashboard">
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link className="text-white" to="/"  as={NavLink}>Accueil</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link className="text-white" href="/#service" >Nos Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link className="text-white" href="/#project" >Nos Projets</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{color: "white"}}>
                            <Nav.Link className="text-white" to="/contact"  as={NavLink}>Contact</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            {authedUser === 'root' && <Nav.Link className="text-white" eventKey="link-2"  as={NavLink} to="/add">Service</Nav.Link>}
                        </Nav.Item>
                        { (authedUser !==  null)                        
                            ? (<Nav.Item onClick={this.handleClick}>
                                    <Nav.Link className="text-white" as={NavLink} eventKey="link-3" to='/login'>D??connexion</Nav.Link>
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