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
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash'

import UploadContainer from './track_uploads/track_upload_container';
import {  ProtectedRoute } from '../util/route_util';
import { openModal } from '../actions/modal_actions';

const App = () => (
    <div>
            <Modal />
        <nav>
            <Route path="/"><NavbarContainer /></Route> 
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
