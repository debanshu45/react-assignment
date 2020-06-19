import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import EmployeeList from './Components/Dashboard/EmployeeList';
import Login from './Components/Loginpage/Login';
import Userlogin from './Components/Loginpage/Userlogin';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/Dashboard">
          <EmployeeList/>
        </Route>
        <Route  path="/Home">
          <Home/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
