import React from 'react';
import {
    withRouter,
    NavLink,
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';
import LibOverviewContainer from './lib_overview_container';
import LibLikesContainer from './lib_likes_container';
import LibSetsContainer from './lib_sets_container';
import LibAlbumsContainer from './lib_albums_container';
import LibStationsContainer from './lib_stations_container';
import LibFollowingContainer from './lib_following_container';
import LibHistoryContainer from './lib_history_container';
// import LibHistory from './lib_history';

class Library extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="library-nav-container">
                    <ul className="library-nav">
                        <li className="lnitem">
                            <NavLink
                                exact to={`/you/library`}
                                activeClassName="lnitem-active"
                            >
                                Overview
                            </NavLink>
                        </li>
                        <li className="lnitem">
                            <NavLink
                                exact to={`/you/likes`}
                                activeClassName="lnitem-active"
                            >
                                Likes
                            </NavLink>
                        </li>
                        {/* <li className="lnitem">
                            <NavLink
                                exact to={`/you/sets`}
                                activeClassName="lnitem-active"
                            >
                                Playlists
                            </NavLink>
                        </li>
                        <li className="lnitem">
                            <NavLink
                                exact to={`/you/albums`}
                                activeClassName="lnitem-active"
                            >
                                Albums
                            </NavLink>
                        </li>
                        <li className="lnitem">
                            <NavLink
                                exact to={`/you/stations`}
                                activeClassName="lnitem-active"
                            >
                                Stations
                            </NavLink>
                        </li> */}
                        {/* <li className="lnitem">
                            <NavLink
                                exact to={`/you/following`}
                                activeClassName="lnitem-active"
                            >
                                Following
                            </NavLink>
                        </li> */}
                        <li className="lnitem">
                            <NavLink
                                exact to={`/you/history`}
                                activeClassName="lnitem-active"
                            >
                                History
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="library-main-container">
                    <Switch>
                        <ProtectedRoute exact path='/you/library' component={LibOverviewContainer} />
                        <ProtectedRoute exact path='/you/likes' component={LibLikesContainer} />
                        <ProtectedRoute exact path='/you/sets' component={LibSetsContainer} />
                        <ProtectedRoute exact path='/you/albums' component={LibAlbumsContainer} />
                        <ProtectedRoute exact path='/you/stations' component={LibStationsContainer} />
                        <ProtectedRoute exact path='/you/following' component={LibFollowingContainer} />
                        <ProtectedRoute exact path='/you/history' component={LibHistoryContainer} />
                    </Switch>
                </div>
            </div>
        );
    }
}


export default withRouter(Library);