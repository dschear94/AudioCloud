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

class LibFollowing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Library Following
            </div>
        )
    }
}


export default withRouter(LibFollowing);