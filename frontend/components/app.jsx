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
        <nav>
            <div><Modal /></div>
            <div><Link to="/" className="logo">AudioCloud - Development</Link></div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/">Stream</Link></div>
            <div><Link to="/">Library</Link></div>
            {/* search bar */}
            <ProfileContainer/>      
        </nav>
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
