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

                </div>
            </div>
        );
    }
}


export default withRouter(Library);