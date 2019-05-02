import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { fetchUsers, loginUser } from '../src/actions/user'

class App extends Component {

  constructor(){
    super()
    const userAlreadyLoggedIn = window.sessionStorage.getItem('user') !== 'undefined' && window.sessionStorage.getItem('user') !== null
    this.user =  userAlreadyLoggedIn ? JSON.parse(window.sessionStorage.getItem('user')) : null
  }

  componentDidMount() {
    this.props.fetchUsers()
    this.props.loginUser(this.user)
  }

  render() {
    return (
      <div>
        <Router>
        <div className="App">
          <Header user={this.props.user}/>
        </div>
        <section>
        <Route exact path="/" render={() => {
          const path =  this.user ? '/dashboard' : '/login'
          return <Redirect to={path} />
          }}
        />
        <Route exact path="/logout" render={() => {
          this.props.logoutUser()
          return <Redirect to='/login' />
          }}
        />
          <Route exact path="/dashboard" exact component={Dashboard}/>
          <Route exact path="/login" exact component={Login}/>
        </section>
        </Router>
      </div>
    );
  }
}

export default connect((store) => ({
  user: store.users.loggedInUser
}), {
  fetchUsers,
  loginUser
})(App)
