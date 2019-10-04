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
import UploadContainer from './upload/upload_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute, ProtectedLink } from '../util/route_util';

const App = () => (
    <div>
        {/* <Route path="/session"> */}
            <Modal />
        {/* </Route> */}
        <nav>
            <Route path="/">
                <div><Link to="/" className="logo">AudioCloud - Development</Link></div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/">Stream</Link></div>
                <div><Link to="/">Library</Link></div>
                <div><Link to="/upload">Upload</Link></div>
                {/* search bar */}
                <div><ProfileContainer /></div>     
            </Route> 
        </nav>
        {/* <Switch> */}
            {/* <Route exact path="/"/>
            <ProtectedRoute exact to="/upload" component={UploadContainer}/>
            <Route exact path="/session" component={Modal}/> */}
        {/* </Switch> */}
        <footer>
            {/* continuous play music bar */}
        </footer>
    </div>
);

export default App;
