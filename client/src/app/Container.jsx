import React, {Component} from "react";
import styles from "../styles/app.scss";

export class App extends Component {
    render() {
        return (
            <h1 className={styles.h1}>Hello there!
                <span className="test">test</span>
            </h1>
        );
    }
}

export default App;
