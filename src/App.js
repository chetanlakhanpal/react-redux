import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { fetchUsers, loginUser, logoutUser } from '../src/actions/user'

class App extends Component {

  constructor(){
    super()
    this.user = null
    try{
      this.user = JSON.parse(window.sessionStorage.getItem('user'))
    }catch(e){
      console.warn(`No data found redirecting to Login`)
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
    if(this.user !== null){
      this.props.loginUser(this.user)
    }
  }

  render() {
    return (
      <div>
        <Router>
        <div className="App">
          <Header user={this.props.user}/>
        </div>
        <section>

        {/* <Route exact path="/" render={() => {
          console.log(this.user)
          const path =  this.user !== null? '/dashboard' : '/login'
          return <Redirect to={path} />
          }}
        />
         */}
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
  loginUser,
  logoutUser
})(App)
