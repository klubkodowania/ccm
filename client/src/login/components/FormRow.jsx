import React, {PropTypes, Component} from "react";

export class FormRow extends Component {

    render() {
        return (
            <div className="form-row">
                <label
                    htmlFor={this.props.id}
                    className="form-row_label"
                >
                    {this.props.label}
                </label>
                <input
                    type={this.props.inputType}
                    id={this.props.id}
                    className="form-row_input"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.change}
                    pattern={this.props.pattern}
                />
                <p className="form-row_validation">{this.props.errorLabel}</p>
            </div>
        );
    }
}

FormRow.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    change: PropTypes.func,
    errorLabel: PropTypes.string,
    pattern: PropTypes.string
};

export default FormRow;
