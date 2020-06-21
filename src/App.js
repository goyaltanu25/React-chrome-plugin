import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import history from "./history";
import { Provider } from "react-redux";
import store from './redux/store';
import Navigation from "./containers/Navigation/Navigation";



class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Navigation />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
