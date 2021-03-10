import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../src/reducer';

window.__APP_STATE__ = undefined;
const initialState = window.__APP_STATE__;

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunkMiddleware)
);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
, document.getElementById("root"));
