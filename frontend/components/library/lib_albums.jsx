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

class LibAlbums extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Library Albums
            </div>
        )
    }
}


export default withRouter(LibAlbums);