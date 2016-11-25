/* eslint-disable import/default */

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import getRoutes from "./routes";
import configureStore from "./store/configureStore";

import "./styles/app.scss";

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={getRoutes(store)}/>
    </Provider>, document.getElementById("app")
);
