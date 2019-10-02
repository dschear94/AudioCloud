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
            <li><Modal /></li>
            <li><Link to="/" className="header-link">AudioCloud - Development</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Stream</Link></li>
            <li><Link to="/">Library</Link></li>
            {/* search bar */}
            <li className="profile-nav"><ProfileContainer/></li>            
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
