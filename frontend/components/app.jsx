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

import TrackUploadContainer from './track_uploads/track_upload_container';
import DiscoverContainer from './discover/discover_container';
import {  ProtectedRoute } from '../util/route_util';
import { openModal } from '../actions/modal_actions';

const App = () => (
    <div>
            <Modal />
        <nav>
            <Route path="/"><NavbarContainer /></Route> 
        </nav>

        <div className="main">
            <Switch>
                <ProtectedRoute exact path="/upload" component={TrackUploadContainer} />
                <Route path='/discover'><DiscoverContainer /></Route>
                <Route path="/"><Splash /></Route>
            </Switch>
            
        </div>

        <footer>
            {/* continuous play music bar */}
        </footer>
    </div>
);

export default App;
