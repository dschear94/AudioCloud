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

class LibSets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Library Sets
            </div>
        )
    }
}


export default withRouter(LibSets);