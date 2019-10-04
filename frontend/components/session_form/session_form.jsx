import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.handleSignupStepOne = this.handleSignupStepOne.bind(this);
        this.handleSignupStepTwo = this.handleSignupStepTwo.bind(this);
        this.handleEntryStep = this.handleEntryStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        delete user.found;
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
            <div className="session-submit">
                <input className="demo-button" type="submit" value="Demo User" onClick={this.handleDemoSubmit} />
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
                        <br />
                        <input className="session-submit-button" type="submit" value="Continue" />
                    </div>
                </form>
            </div>
            ) 
            const loginStep = (
                <div className="session-submit">
                    < form onSubmit = { this.handleSubmit } className = "login-form-box" >
                        <div className="login-form">
                            <input type="text"
                                value={this.state.entryField}
                                onChange={this.update('entryField')}
                                className="login-input"
                                placeholder="Your email address or profile URL *"
                            />
                            <br />
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
                            <br />
                            <input className="session-submit-button" type="submit" value="Sign in" />
                        </div>
                    </form >
                </div>
            )


        const signupStep = (
            <div className="session-submit">
                <h2 className="signupFormHeader">
                    Create your AudioCloud
                </h2 >
                <h2 className="signupFormHeader">
                    account
                </h2>
                <br />
                < form onSubmit={this.handleSignupStepOne} className="login-form-box" >
                    <div className="login-form">
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                        <br />
                        <br />
                        <span className="input-span">Choose a password</span>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <br />
                        <input className="session-submit-button" type="submit" value="Accept & Continue" />
                    </div>
                </form >
            </div>
        )

        const signupStep2 = (
            <div className="session-submit">
                <h2 className="signupFormHeader">
                    Create your AudioCloud
                </h2 >
                <h2 className="signupFormHeader">
                    account
                </h2>
                <br />
                < form onSubmit={this.handleSignupStepTwo} className="login-form-box" >
                    <div className="login-form">
                            <span className="input-span">Tell us your age</span>                            
                            <input type="text"
                                value={this.state.age}
                                onChange={this.update('age')}
                                className="login-input"
                            />
                        <br />
                        <br />
                        <span className="input-span">Gender</span>
                            <input type="text"
                                value={this.state.gender}
                                onChange={this.update('gender')}
                                className="login-input"
                                placeholder="Indicate your gender"
                            />
                        <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <br />
                        <input className="session-submit-button" type="submit" value="Continue" />
                    </div>
                </form >
            </div>
        )
        const signupStep3 = (
            <div className="session-submit">
                <h2 className="signupFormHeader">
                    Tell us a bit
                </h2 >
                <h2 className="signupFormHeader">
                    about yourself
                </h2>
                <br/>
                < form onSubmit={this.handleSubmit} className="login-form-box" >
                    <div className="login-form">
                        <span className="input-span">Choose your display name</span>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <br/>
                        <input className="session-submit-button" type="submit" value="Get Started" />
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
            <div>
                {display}
            </div>
        );
    }
}

export default withRouter(SessionForm);
