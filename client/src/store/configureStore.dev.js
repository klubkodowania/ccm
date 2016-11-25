// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../rootReducer";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../rootReducer", () => {
            const nextReducer = require("../rootReducer").default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
