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
import DashboardContainer from './dashboard/dashboard_container';
import StreamContainer from './stream/stream_container';
import ContinuousPlayBar from './continuous_play_bar/continuous_play_bar';
import TrackShowContainer from './track_show/track_show_container';
import LibraryContainer from './library/library_container';
import SocialSideBarContainer from './social_sidebar/social_sidebar_container'

import { SplashyRoute , ProtectedRoute, CPBRoute } from '../util/route_util';
import { openModal } from '../actions/modal_actions';



const App = () => (
    <div className="main-bg">
            <Modal />
            <Route path="/"><NavbarContainer /></Route>
        <div className="main">
            <div className="main-content-container">
                <div className="main-content">
                    <div className="main-content2">
                    <Switch>
                        <ProtectedRoute exact path='/discover' component={DiscoverContainer} />
                        <ProtectedRoute exact path='/stream' component={StreamContainer} />
                        <ProtectedRoute exact path="/upload" component={TrackUploadContainer} />
                        <ProtectedRoute exact path='/you/library' component={LibraryContainer}/>
                        <ProtectedRoute exact path='/you/likes' component={LibraryContainer}/>
                        <ProtectedRoute exact path='/you/sets' component={LibraryContainer}/>
                        <ProtectedRoute exact path='/you/albums' component={LibraryContainer}/>
                        <ProtectedRoute exact path='/you/stations' component={LibraryContainer}/>
                        <ProtectedRoute exact path='/you/following' component={LibraryContainer}/>
                        <ProtectedRoute exact path='/you/history' component={LibraryContainer}/>
                        <ProtectedRoute exact path='/:artist' component={DashboardContainer} />
                        <ProtectedRoute exact path='/:artist/toptracks' component={DashboardContainer} />
                        <ProtectedRoute exact path='/:artist/tracks' component={DashboardContainer} />
                        <ProtectedRoute exact path='/:artist/albums' component={DashboardContainer} />
                        <ProtectedRoute exact path='/:artist/sets' component={DashboardContainer} />
                        <ProtectedRoute exact path='/:artist/reposts' component={DashboardContainer} />
                        <ProtectedRoute exact path='/:artist/:track' component={TrackShowContainer} />
                        <SplashyRoute exact path="/" component={SplashContainer}/>
                    </Switch>
                    <ProtectedRoute exact path={['/discover', '/stream']} component={SocialSideBarContainer} />
                    </div>
                </div>
            </div>
            <UploadModal />
        </div>
        <CPBRoute path="/" component={ContinuousPlayBar} />
    </div>
);

export default App;