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
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PDFDocs from './components/Documents';
import AllDocs from './components/AllDocs';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {

    const { login } = this.props
    const isAuthenticated = login !== null ? login.isLoggedin : false
      return (
        <BrowserRouter>
          <Fragment>'
            <>
            <Menu />
            <Header />           
            <Routes>
              <Route exact path ='/' element={<Main />} />
              <Route exact path='/dashboard/:service' element={<Dashboard {...this.props}/>} />
              <Route path ='/add' exact element={<NewProduct />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route path ='/docs/:filename' element={<PDFDocs {...this.props} />} />
            </Routes>
            <Footer />
            </> 
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
