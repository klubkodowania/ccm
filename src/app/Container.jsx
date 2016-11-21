import React, {Component} from "react";

export class App extends Component {
    render() {
        return (
            <main>
                <h1>Hello there!</h1>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Button
                </button>
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                    <i className="material-icons">add</i>
                </button>
            </main>
        );
    }
}

export default App;
