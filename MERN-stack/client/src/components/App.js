import React from 'react';
import logo from '../assets/img/logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../assets/css/App.css';

//pages,components
import Homepage from './Homepage';
import Body from './body';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/body" component={Body} />
      </div>
    </Router>
  );
}

export default App;
