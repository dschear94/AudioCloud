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

    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.props.fetchArtistsByFollows(this.props.currentUser.id)
    }

    render() {
        // debugger
        return (
            <div>
                Library Following
                <ul className="artistBadgeList">

                </ul>
            </div>
        )
    }
}


export default withRouter(LibFollowing);