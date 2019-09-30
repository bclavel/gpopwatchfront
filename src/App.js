import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from './Components/dashboard';
import Director from './Components/director';
import Submission from './Components/submission';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/director/:name" component={Director} />
            <Route path="/submission/" component={Submission} />
          </Switch>
        </Router>
    )
  }
};

export default App;
