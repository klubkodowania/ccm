import React, {Component} from "react";
import {LoginForm} from "../login";
import "../styles/app.scss";

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
