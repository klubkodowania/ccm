import React, {Component} from "react";
import FormRow from "./FormRow";
import {messages} from "../../shared";

export class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: ""
        };

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event, key) {
        this.setState({
            [key]: event.target.value
        });
    }

    render() {
        return (
            <form noValidate="true" className="login-form">
                <FormRow
                    id="login"
                    label={messages.pl.loginPage.login.label}
                    inputType="text"
                    placeholder={messages.pl.loginPage.login.placeholder}
                    value={this.state.login}
                    change={(e)=>this.changeValue(e, "login")}
                    errorLabel={messages.pl.loginPage.login.error}
                />
                <FormRow
                    id="password"
                    label={messages.pl.loginPage.password.label}
                    inputType="password"
                    placeholder={messages.pl.loginPage.password.placeholder}
                    value={this.state.password}
                    change={(e)=>this.changeValue(e, "password")}
                    errorLabel={messages.pl.loginPage.password.error}
                />
                <input
                    className="login-form_submit"
                    type="submit"
                    id="loginSubmit"
                    value={messages.pl.loginPage.submit.value}
                />
            </form>
        );
    }
}

export default LoginForm;
