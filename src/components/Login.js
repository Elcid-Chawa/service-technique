import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setAuthedUser } from '../actions/authUser';
import { handleLogin } from '../actions/login';

const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();
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
        
        this.setState(() => ({
            authedUser: this.state.username
        }))

        this.props.dispatch(handleLogin(this.state.username));
        this.setState(() => ({
            loggedIn: true
        }))

        this.props.dispatch(setAuthedUser(this.state.username));

        console.log(this.state.authedUser);
    }
    
    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'text' ? target.value : null;
        this.setState({
            username: value
        });
    }

    render(){

       const {loggedIn} = this.state;

        if(loggedIn){

            return <Navigate to='/' /> 
        }

        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}> 
                    <label>Username: </label>
                    <input type="text" name='username' placeholder='username' value={this.state.username} onChange={this.handleChange} />
                    <br />
                    <label>Password: </label>
                    <input type="password" placeholder='enter pasword' />
                    <br />
                    <button type='submit'>Login</button>
                </form> 
            </div>
        )
    }
}

function mapStateToProps({ users, products, login, authedUser }) {
    const user = authedUser
    const isLoggedIn = ((login != null) || (login !== undefined)) ? login.isLoggedIn: false;
    return {
      userKey: Object.keys(users), 
      products, 
      isLoggedIn, 
      user
    }
  }

export default connect(mapStateToProps)(withRouter(Login));