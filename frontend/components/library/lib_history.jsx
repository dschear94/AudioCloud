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

class LibHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                LibHistory
            </div>
        )
    }
}


export default withRouter(LibHistory);