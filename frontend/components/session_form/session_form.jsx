import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let emailUserField = (this.props.formType === "signup" ? 
            (
                <div className="login-form">
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder="Enter email *"
                    />
                    <br/>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="login-input"
                        placeholder="Choose a profile URL *"
                    />
                    <br/>
                </div>
            ) : (
            <div className="login-form">
                <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    placeholder="Your email address or profile URL *"
                />
                <br />
            </div>
            )
        )

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                        {emailUserField}
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Your password *"
                            />
                        <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <input className="session-submit" type="submit" value="Continue" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
