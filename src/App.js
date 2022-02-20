import logo from './logo.svg';
import { connect } from 'react-redux';
import React, {Component, Fragment } from 'react';
import './App.css';
import { handleInitialData } from './actions/shared';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import NewProduct from './components/NewProduct';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {

    const { login } = this.props
    const isAuthenticated = login !== null ? login.isLoggedin : false
      return (
        <BrowserRouter>
          <Fragment>
            <div className="App">
              { !isAuthenticated ? <Login />
                : <div>
                    <header className='App-header'>
                    <Menu />
                    </header>
                    <Routes>
                      <Route exact path='/' element={<Dashboard />} />
                      <Route path ='/add' exact element={<NewProduct />} />
                      <Route path='/login' component={<Login />} />
                    </Routes>
                  </div>
              }
            </div>   
          </Fragment>
        </BrowserRouter>
      
    );
  }
  
}

function mapStateToProps({ users, products, login, authedUser }) {
  return {
    users, 
    products, 
    login, 
    authedUser
  }
}

export default connect(mapStateToProps)(App);
