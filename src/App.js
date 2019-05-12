import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { fetchUsers, loginUser } from '../src/actions/user'
import NotFound from "./components/NotFound/NotFound"
import Question from './components/Question/Question';
import Poll from './components/Poll/Poll'
import Leaderboard from './components/Leaderboard/Leaderboard'

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
              return <Redirect to={{
                pathname: '/login',
                state: {visitedPage: location.pathname}
              }} />
              }
            }}/>
            <section className="container">
            <Switch>
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/questions/:question_id" component={Poll} />
                <Route exact path="/add" component={Question} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/logout" render={() => {
                  return <Redirect to={{
                    pathname:'/login',
                    state: {type: 'logout'}
                  }} 
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
  loginUser
})(App)
