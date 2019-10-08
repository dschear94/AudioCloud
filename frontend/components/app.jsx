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
import UploadModal from './modal/upload_modal';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash'

import TrackUploadContainer from './track_uploads/track_upload_container';
import DiscoverContainer from './discover/discover_container';
import ContinuousPlayBar from './continuous_play_bar/continuous_play_bar'

import {  ProtectedRoute } from '../util/route_util';
import { openModal } from '../actions/modal_actions';

const App = () => (
    <div>
            <Modal />
            <UploadModal/>
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
            <Route path="/"><ContinuousPlayBar/></Route>
        </footer>
    </div>
);

export default App;
