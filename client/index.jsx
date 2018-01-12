import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

console.log('root', document.getElementById("root"));

ReactDOM.render (
      <App />,
  document.getElementById("root")
)
