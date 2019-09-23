import React, {Component} from 'react';
import Landing from '../Landing/Landing'
import Main from '../Main/Main';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
  return (
    <Router>
    <Route exact path='/' component={Landing} />
    <Switch>
      <Route exact path='/main' component={Main} />
    </Switch>

    </Router>
  );
  }
}

export default App;
