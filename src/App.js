
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Event from './components/Event/Event';
import AddEvent from './components/AddEvent/AddEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { registerVersion } from 'firebase';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
     
    <Router>
   
      <Switch>
      
      <Route path="/home">
         
          <Home></Home>
        </Route>
      <Route exact path="/">
          <Home/>
        </Route>
         <Route path='/event'>
          <Event></Event>
        </Route> 
        
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/register">
               <Register></Register>
                
              </PrivateRoute>
              <Route path='/addEvent'>
                <AddEvent></AddEvent>
              </Route>
        {/* <Route path="*">
          <NotFound></NotFound>
        </Route> */}

      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
