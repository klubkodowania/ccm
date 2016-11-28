import React, {Component} from "react";
import FormRow from "./FormRow";

export class LoginForm extends Component {
    render() {
        return (
            <div className="login">

                <form noValidate="true" className="login_form">
                    <FormRow
                        id="login"
                        label="Login"
                        inputType="text"
                        placeholder="Login"
                        aKey="key-login"
                        errorLabel="no co ty człowieku"
                        pattern="[0-9]"
                    />
                    <FormRow
                        id="password"
                        label="Hasło"
                        inputType="password"
                        placeholder="Hasło"
                        aKey="key-password"
                        errorLabel="ja nie radze"
                    />
                    <input type="submit" id="loginSubmit" value="Zaloguj"/>
                </form>
            </div>
        );
    }
}

export default LoginForm;
