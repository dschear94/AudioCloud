import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entryField: '',
            username: '',
            email: '',
            password: ''
        };
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);

        this.handleEntryStep = this.handleEntryStep.bind(this);
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

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = Object.assign({
            username: "derek", 
            password: "123456"
        });
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleEntryStep(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processEntryStep(user)
        // .then(this.props.nextStep(user.found));
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
        // let emailUserField = (this.props.formType === "signup" ? 
        //     (
        //         <div className="login-form">
        //             <input type="text"
        //                 value={this.state.email}
        //                 onChange={this.update('email')}
        //                 className="login-input"
        //                 placeholder="Enter email *"
        //             />
        //             <br/>
        //             <input type="text"
        //                 value={this.state.username}
        //                 onChange={this.update('username')}
        //                 className="login-input"
        //                 placeholder="Choose a profile URL *"
        //             />
        //             <br/>
        //         </div>
        //     ) : (
            // <div className="login-form">
            //     <input type="text"
            //         value={this.state.username}
            //         onChange={this.update('username')}
            //         className="login-input"
            //         placeholder="Your email address or profile URL *"
            //     />
            //     <br />
            // </div>
        //     )
        // )
        const entryStep = (
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
            )

            const loginStep = (
            < form onSubmit = { this.handleSubmit } className = "login-form-box" >
                <h2 className="signinFirstStep_div">or</h2>
                <div className="login-form">
                    {/* {emailUserField} */}
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
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
            )

        return (
            <div className="login-form-container">
                <input className="session-submit" type="submit" value="Demo User" onClick={this.handleDemoSubmit} />
                {this.props.formType === 'entry' ? entryStep : loginStep}
            </div>
        );
    }
}

export default withRouter(SessionForm);
