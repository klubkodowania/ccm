import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../rootReducer";
import thunkMiddleware from "redux-thunk";

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware
            )
        )
    );
}
