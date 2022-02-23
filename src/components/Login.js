import React, {Component } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setAuthedUser } from '../actions/authUser';
import { handleLogin } from '../actions/login';

const withRouters = (Component) => {
    const Wrapper = (props) => {
        let history = useNavigate();
        return <Component history={history} {...props} />
    };
    return Wrapper;
}

class Login extends Component {
    state = {
        authedUser: undefined,
        loggedIn: false,
        username: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.dispatch(handleLogin(this.state.authedUser));
        this.setState(() => ({
            loggedIn: true
        }))

        this.props.dispatch(setAuthedUser(this.state.authedUser));

    }
    
    handleChange = (e) => {
        const target = e.target;
        const value = target.name === 'username' ? target.value : null;
        this.setState({
            authedUser: value,
            username: value
        });
    }

    render(){

       const {loggedIn} = this.state;
       const {isLoggedIn} = this.props;

        
        return(
            <Container className='position-absolute top-50 start-50 translate-middle border border-2 rounded border-primary'>
                <Row className='justify-content-md-center'><h3>Login</h3></Row>
                <Row className='justify-content-center aling-items-center'>
                   <Form onSubmit={this.handleSubmit} className="form-outline mb-4" >
                        {loggedIn &&
                            <Navigate to="/dashboard" replace={true} />
                        }
                        <Form.Group className="form-outline mb-3">
                            <Form.Label>Username: </Form.Label>
                            <Form.Control type="text" name='username' placeholder='username' value={this.state.username} onChange={this.handleChange} />
                            <Form.Text className='test-muted'> Enter username to login</Form.Text>
                        </Form.Group> 
                        <Form.Group className="form-outline mb-3" controlId="formGroupPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder='enter pasword' />
                            <Form.Text className='test-muted'>Enter password</Form.Text>
                        </Form.Group>    
                            
                        <Button type='submit' className='btn btn-primary btn-block mb-4'>Login</Button>
                        
                    </Form> 
                </Row>
                
            </Container>
            
        )
    }
}

function mapStateToProps({ users, products, login, authedUser }) {
    const user = authedUser
    const isLoggedIn = ((login != null) || (login !== undefined)) ? login.isLoggedIn: false;
    const payload = ((login != null) || (login !== undefined)) ? login.payload: user;
    return {
      userKey: Object.keys(users), 
      products, 
      isLoggedIn, 
      user,
      payload
    }
  }

export default connect(mapStateToProps)(withRouters(Login));