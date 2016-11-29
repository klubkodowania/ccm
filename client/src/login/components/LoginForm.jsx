import React, {Component} from "react";
import FormRow from "./FormRow";

export class LoginForm extends Component {
    render() {
        return (
            <form noValidate="true" className="login-form">
                <FormRow
                    id="login"
                    label="Login"
                    inputType="text"
                    placeholder="Wpisz swój login"
                    aKey="key-login"
                    errorLabel="no co ty człowieku"
                />
                <FormRow
                    id="password"
                    label="Hasło"
                    inputType="password"
                    placeholder="Wpisz swoje hasło"
                    aKey="key-password"
                    errorLabel="ja nie radze"
                />
                <input
                    className="login-form_submit"
                    type="submit"
                    id="loginSubmit"
                    value="Zaloguj"
                />
            </form>
        );
    }
}

export default LoginForm;
