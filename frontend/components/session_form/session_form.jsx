import React from 'react';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            formType: this.props.formType,
            errors: this.props.errors,
        };
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.handleSignupStepOne = this.handleSignupStepOne.bind(this);
        this.handleSignupStepTwo = this.handleSignupStepTwo.bind(this);
        this.handleEntryStep = this.handleEntryStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    update(field) {
        const oldUser = this.state.user ;
        return e => {
            return this.setState({
                user: Object.assign({}, oldUser, { [field]: e.currentTarget.value })
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state.user);
        delete user.found;
        this.props.processForm(user).then(closeModal()).fail(
            err => this.setState({
            errors: err.errors
        }));
        // this.setState({
        //     // user: this.state.user,
        //     errors: this.props.errors,
        //     // formType: this.props.formType
        // });
    }

    handleSignupStepOne(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state.user);
        this.setState({
            formType: 'signup2',
            user: this.state.user
        })
        if (this.state.user.password.length < 6 ) {
            // this.state.errors.push('Password must be 6 characters or more');
            this.setState({
                formType: 'signup',
                user: this.state.user,
                errors: ['Password must be 6 characters or more']
            });
        } else {
            this.setState({
                formType: 'signup2',
                user: this.state.user,
                errors: []
            })
        }
        return this.props.openModal(this.state.formType);
    }

    handleSignupStepTwo(e) {
        e.preventDefault();
        this.setState({
            formType: 'signup3',
            user: this.state.user,
            errors: this.props.errors
        });
        return this.props.openModal(this.state.formType);
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
        const user = Object.assign({}, this.state.user);
        this.props.processEntryStep(user).then(this.setState({
            errors: []
        })).fail(err => this.setState({
            errors: err.errors
        }));
    }

    renderErrors() {
        return (
            <ul>
                {this.state.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    goBack() {
        this.setState({
            errors: []
        });
        return this.props.openModal('entry');
    }

    render() {
        const entryStep = (
            <div className="session-submit">
                <input className="demo-button" type="submit" value="Demo User" onClick={this.handleDemoSubmit} />
                <form onSubmit={this.handleEntryStep} className="login-form-box">
                    <h2 className="signinFirstStep_div">or</h2>
                    <div className="login-form">
                        <input type="text"
                            value={this.state.user.entryField}
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
                                value={this.state.user.entryField}
                                onClick={this.goBack}
                                className="login-input2"
                                // placeholder="Your email address or profile URL *"
                                readOnly
                            />
                            <br />
                            <br />
                            <input type="password"
                                value={this.state.user.password}
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
                            value={this.state.user.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder=""
                        />
                        <br />
                        <br />
                        <span className="input-span">Choose a password</span>
                            <input type="password"
                                value={this.state.user.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder=""
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
                                value={this.state.user.age}
                                onChange={this.update('age')}
                                className="login-input"
                                placeholder=""
                                maxLength="3"
                            />
                        <br />
                        <br />
                        <span className="input-span">Gender</span>
                            <select name="gender" onChange={this.update('gender')} className="login-input">
                                <option value>Indicate your gender</option>
                                <option value={this.state.user.gender} onChange={this.update('gender')}>Female</option>
                                <option value={this.state.user.gender} onChange={this.update('gender')}>Male</option>
                                <option value={this.state.user.gender} onChange={this.update('gender')}>Prefer not to say</option>
                                <option value={this.state.user.gender} onChange={this.update('gender')}>Custom</option>
                            </select>
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
                                value={this.state.user.username}
                                onChange={this.update('username')}
                                className="login-input"
                                placeholder=""
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
            if (this.state.formType === 'entry') {
                return display = entryStep;
            } else if (this.state.formType === 'login') {
                return display = loginStep;
            } else if (this.state.formType === 'signup') {
                return display = signupStep;
            } else if (this.state.formType === 'signup2') {
                return display = signupStep2;
            } else if (this.state.formType === 'signup3') {
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
