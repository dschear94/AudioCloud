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
import ArtistBadgeItem from '../artist_badge/artist_badge_item'

class LibFollowing extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.props.fetchArtistsByFollows(this.props.currentUser.id)
    }

    render() {
        const { artists, currentUser } = this.props;
        const artistBadges = artists.map(artist => <ArtistBadgeItem
                key={artist.id}
                artist={artist}
                currentUser={currentUser}
            />)

        return (
            <div>
                <div className="lib-following-header">
                    <div className="lfheader-text">
                        Hear what the people you follow have posted:
                    </div>
                </div>
                <ul className="artistBadgeList">
                    {artistBadges}
                </ul>
            </div>
        )
    }
}


export default withRouter(LibFollowing);