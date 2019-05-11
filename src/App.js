import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { fetchUsers, loginUser, logoutUser } from '../src/actions/user'
import NotFound from "./components/NotFound/NotFound"
import Question from './components/Question/Question';
import Poll from './components/Poll/Poll'

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route render={(props) => <Header {...props} user={this.props.user}/>} />
          <Route path="/"  render={({location}) => {
            if(location.pathname !== '/login' && !this.props.user){
              return <Redirect to='/login' />
              }
            }}/>
            <section className="container">
            <Switch>

                <Route path="/questions/:question_id" component={Poll} />
                <Route exact path="/add" component={Question} />
                <Route exact path="/login" exact component={Login}/>
                <Route exact path="/dashboard" exact component={Dashboard}/>
                <Route exact path="/logout" render={() => {
                  this.props.logoutUser()
                  return <Redirect to='/login' 
                  />
                }} />
                <Route component={NotFound} />
            </Switch>
          </section>
        </div>
      </Router>
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
