import React, {Component} from "react";
import styles from "../styles/app.scss";
import {LoginForm} from "../login";

export class App extends Component {
    render() {
        return (
            <section>
                <h1 className={styles.h1}>Code Club Manager</h1>
                <LoginForm />
            </section>
        );
    }
}

export default App;
