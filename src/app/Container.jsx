import React, {Component} from "react";

export class App extends Component {
    render() {
        return (
            <section className="login">
                <header>
                    <h3>Code Club Manager</h3>
                </header>
                <div className="mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Zaloguj się na konto</h2>
                    </div>
                    <form>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="login"/>
                            <label className="mdl-textfield__label" htmlfor="login">Wpisz login</label>
                            <span className="mdl-textfield__error">Błędny login</span>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="password" pattern="-?[0-9]*(\.[0-9]+)?"
                                   id="pin"/>
                            <label className="mdl-textfield__label" htmlfor="pin">Wpisz PIN</label>
                            <span className="mdl-textfield__error">Pin składa się z cyfr!</span>
                        </div>
                        <div className="mdl-card__actions">
                            <input
                                type="submit"
                                className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                                value="Zaloguj"
                            />
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default App;
