import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

//Components
import Home from './Home.jsx';

//Redux Calls
import store, { fetchRecipes } from '../store';

export default class App extends Component {
  render(){
    return (
      <Provider store={ store }>
        <Router>
          <Route path="/" component={ Home } />
        </Router>
      </Provider>
    );
  }
}
