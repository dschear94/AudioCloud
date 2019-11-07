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
import LibraryOverviewContainer from './library_overview_container';

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
                        <li className="lnitem">
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
                        </li>
                        <li className="lnitem">
                            <NavLink
                                exact to={`/you/following`}
                                activeClassName="lnitem-active"
                            >
                                Following
                            </NavLink>
                        </li>
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
                        <ProtectedRoute exact path='/you/library' component={LibraryOverviewContainer} />
                        {/* <ProtectedRoute exact path='/you/likes' component={LibraryContainer} />
                        <ProtectedRoute exact path='/you/sets' component={LibraryContainer} />
                        <ProtectedRoute exact path='/you/albums' component={LibraryContainer} />
                        <ProtectedRoute exact path='/you/stations' component={LibraryContainer} />
                        <ProtectedRoute exact path='/you/following' component={LibraryContainer} />
                        <ProtectedRoute exact path='/you/history' component={LibraryContainer} /> */}
                    </Switch>
                </div>
            </div>
        );
    }
}


export default withRouter(Library);