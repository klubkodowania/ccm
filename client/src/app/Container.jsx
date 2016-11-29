import React, {Component} from "react";
import styles from "../styles/app.scss";
import {LoginForm} from "../login";

export class App extends Component {
    render() {
        return (
            <section>
                <h2 className="login-page_header">Code Club Manager</h2>
                <LoginForm />
            </section>
        );
    }
}

export default App;
