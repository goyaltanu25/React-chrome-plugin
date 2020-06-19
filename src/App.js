import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import history from './history';
import Navigation from "./containers/Navigation/Navigation";
import Profile from './containers/Profile/Profile'

class App extends Component {
  user= null;
  render() {
    return (
       this.user ? <Profile/>
       :
      <BrowserRouter history={history}>
        <Navigation/>
      </BrowserRouter>
       
    );
  }
}

export default App;
