import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user || {
                entryField: '',
                username: '',
                email: '',
                password: '',
                age: 0,
                gender: '',
        };
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.handleSignupStepOne = this.handleSignupStepOne.bind(this);
        this.handleSignupStepTwo = this.handleSignupStepTwo.bind(this);
        this.handleEntryStep = this.handleEntryStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleSignupStepOne(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processSignupStepOne(user);
    }

    handleSignupStepTwo(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        debugger
        this.props.processSignupStepTwo(user);
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = Object.assign({
            username: "derek", 
            password: "123456"
        });
        this.props.login(user).then(this.props.closeModal);
    }

    handleEntryStep(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processEntryStep(user);
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
        const entryStep = (
            <div>
                <input className="session-submit" type="submit" value="Demo User" onClick={this.handleDemoSubmit} />
                <form onSubmit={this.handleEntryStep} className="login-form-box">
                    <h2 className="signinFirstStep_div">or</h2>
                    <div className="login-form">
                        <input type="text"
                            value={this.state.entryField}
                            onChange={this.update('entryField')}
                            className="login-input"
                            placeholder="Your email address or profile URL *"
                        />
                        <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <input className="session-submit" type="submit" value="Continue" />
                    </div>
                </form>
            </div>
            ) 
            const loginStep = (
                <div>
                    <input className="session-submit" type="submit" value="Demo User" onClick={this.handleDemoSubmit} />
                    < form onSubmit = { this.handleSubmit } className = "login-form-box" >
                        <h2 className="signinFirstStep_div">or</h2>
                        <div className="login-form">
                            <input type="text"
                                value={this.state.entryField}
                                onChange={this.update('entryField')}
                                className="login-input"
                                placeholder="Your email address or profile URL *"
                            />
                            <br />
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
                    </form >
                </div>
            )


        const signupStep = (
            <div>
                <h2 className="signupFormHeader">
                    Create your AudioCloud
                </h2 >
                <h2 className="signupFormHeader">
                    account
                </h2>
                < form onSubmit={this.handleSignupStepOne} className="login-form-box" >
                    <div className="login-form">
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                        <br />
                        <label>
                            Choose a password *
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>

                        <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <input className="session-submit" type="submit" value="Continue" />
                    </div>
                </form >
            </div>
        )

        const signupStep2 = (
            <div>
                <h2 className="signupFormHeader">
                    Create your AudioCloud
                </h2 >
                <h2 className="signupFormHeader">
                    account
                </h2>
                < form onSubmit={this.handleSignupStepTwo} className="login-form-box" >
                    <div className="login-form">
                        <label>
                            Please select your age
                            <input type="text"
                                value={this.state.age}
                                onChange={this.update('age')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>
                            Please select your gender
                            <input type="text"
                                value={this.state.gender}
                                onChange={this.update('gender')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <input className="session-submit" type="submit" value="Continue" />
                    </div>
                </form >
            </div>
        )
        const signupStep3 = (
            <div>
                <h2 className="signupFormHeader">
                    Create your AudioCloud
                </h2 >
                <h2 className="signupFormHeader">
                    account
                </h2>
                < form onSubmit={this.handleSubmit} className="login-form-box" >
                    <div className="login-form">
                        <label>
                            Please select a profile URL
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <input className="session-submit" type="submit" value="Continue" />
                    </div>
                </form >
            </div>
        )

            let display;
            if (this.props.formType === 'entry') {
                return display = entryStep;
            } else if (this.props.formType === 'login') {
                return display = loginStep;
            } else if (this.props.formType === 'signup') {
                return display = signupStep;
            } else if (this.props.formType === 'signup2') {
                return display = signupStep2;
            } else if (this.props.formType === 'signup3') {
                return display = signupStep3;
            }

        return (
            <div className="login-form-container">
                {display}
            </div>
        );
    }
}

export default withRouter(SessionForm);
