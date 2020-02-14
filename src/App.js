import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signin from './Components/signin';
import Dashboard from './Components/dashboard';
import Director from './Components/director';
import Submission from './Components/submission';

class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" exact component={Signin} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/director/:name" component={Director} />
          <Route path="/submission/" exact component={Submission} />
        </Router>
    )
  }
};

export default App;
