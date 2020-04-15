import React, { Component } from 'react'
import Calculate from './pages/calculate/calculate'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/login'><Login /></Route>
            <Route path='/'><Calculate /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;