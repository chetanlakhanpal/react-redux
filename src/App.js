import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'

import Header from "./components/Header/Header";
import  store from './reducers/reducer';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Question from './components/Question/Question';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
          <Header />
        </div>
        <section>
          <Route exact path="/" exact component={Home}/>
          <Route exact path="/new-question" component={Question}/>
        </section>
        </Router>
      </Provider>
    );
  }
}

export default App;
