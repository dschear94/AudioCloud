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
import Splash from './splash/splash'

import UploadContainer from './upload/upload_container';
import {  ProtectedRoute } from '../util/route_util';
import { openModal } from '../actions/modal_actions';

const App = () => (
    <div>
            <Modal />
        <nav>
            <Route path="/"><ProfileContainer /></Route> 
        </nav>

        <div className="main">
            <Route path="/"><Splash/></Route>
            <ProtectedRoute exact path="/upload" component={UploadContainer} />
        </div>

        <footer>
            {/* continuous play music bar */}
        </footer>
    </div>
);

export default App;
