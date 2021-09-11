import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import PrivateRoute from './utils/PrivateRoute'

import { Login, Profile, SignUp } from './components';
import { FourNotFour, HomePage } from './pages'

function App() {
    return (
      <div className="app">
      <Router>
        <Switch>
          <Route path='/login' component={Login} exact/>
          <Route path='/signup' component={SignUp} exact/>
          <Route path='/' component={HomePage} exact/>
          <PrivateRoute path='/profile' exact component={Profile}/>
          <Route component={FourNotFour} />
        </Switch>
      </Router>
      </div>
    );
}

export default App;
