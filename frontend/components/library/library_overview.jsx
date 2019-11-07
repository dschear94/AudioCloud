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

class LibraryOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Library Overview
            </div>
        )
    }
}


export default withRouter(LibraryOverview);