import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history'

//redux
import { Provider } from 'react-redux'
import store from 'redux/store'

//general routes
import MainView from "views/mainview/MainView";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={MainView} />
          {/* <Redirect from="/" to="/example" /> */}
        </Switch>
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);
