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

class LibLikes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Library Likes
            </div>
        )
    }
}


export default withRouter(LibLikes);