import React from "react";
import {Route} from "react-router";
import {App} from "./app";

export default function getRoutes() {
    return (
        <Route>
            <Route path="/" component={App} />
        </Route>
    );
}
