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
import SplashContainer from './splash/splash_container';

import TrackUploadContainer from './track_uploads/track_upload_container';
import DiscoverContainer from './discover/discover_container';
import ContinuousPlayBar from './continuous_play_bar/continuous_play_bar'

import { SplashyRoute , ProtectedRoute, CPBRoute } from '../util/route_util';
import { openModal } from '../actions/modal_actions';

const App = () => (
    <div className="main-bg">
            <Modal />
            <UploadModal />
            <Route path="/"><NavbarContainer /></Route> 
        <div className="main">
            <div className="main-content-container">
                <div className="main-content">
                    <div className="main-content2">
                    <Switch>
                        <ProtectedRoute exact path="/upload" component={TrackUploadContainer} />
                        <Route path='/discover'><DiscoverContainer /></Route>
                        <SplashyRoute exact path="/" component={SplashContainer}/>
                    </Switch>
                    </div>
                </div>
            </div>
        </div>
        <CPBRoute path="/" component={ContinuousPlayBar} />
    </div>
);

export default App;
