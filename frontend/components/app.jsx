import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import ProfileContainer from './profile_nav/profile_nav_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>AudioCloud - Development</h1>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/">Stream</Link>
            <Link to="/">Library</Link>
            {/* search bar */}
            <ProfileContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
        <footer>
            {/* continuous play music bar */}
        </footer>
    </div>
);

export default App;
