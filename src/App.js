import React, { Component } from 'react'
import Calculate from './components/calculate/calculate'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/login/login'


class App extends Component {
  constructor(props) {
    super(props);
    const screenWidth = window.screen.availWidth;
    if (screenWidth <= 500) alert('本页面暂未适配移动端，在手机上打开可能会导致页面错乱');
  }

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