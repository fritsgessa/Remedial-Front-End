import React, { Component } from 'react';
import Header from './components/Header';
import './support/css/bootstrap.css';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import {connect} from 'react-redux';
import Cookies from "universal-cookie";
import {keepLogin,cookieChecked} from './actions';
import {withRouter} from 'react-router-dom';
import ManageMovie from './components/ManageMovie';
import ManageCategories from './components/ManageCategories';
import ManageMovcat from './components/ManageMovcat';


const cookies = new Cookies();
class App extends Component {
  render() {
      return (
        <div>
          <Header/>
          
          <Route exact path='/' component={Home}/>
          <Route path='/managemovies' component={ManageMovie}/>
          <Route path='/managecategories' component={ManageCategories}/>
          <Route path='/connectmovies' component={ManageMovcat}/>
       
          
        </div>
      );
    
  }
}
const mapStateToProps =(state)=>{
  return {
      cookie: state.auth.cookie
  };
}
export default withRouter(connect(mapStateToProps, {keepLogin,cookieChecked})(App));