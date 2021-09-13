import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeContext } from './context/ThemeContext';
import './App.css';
import PrivateRoute from './utils/PrivateRoute'
import { Login, Profile, SignUp } from './components';
import { FourNotFour, HomePage } from './pages'

function App() {

  const { theme } = useContext(ThemeContext)

    return (
      <div className="app" data-theme={theme}>
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
