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
import TrackBadgeItem from '../track_item/track_badge_item';

class LibraryOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTracksByLikes(this.props.currentUser.id);
        // this.props.fetchTracksByRecentPlays(this.props.currentUser.id);
    }

    render() {
        const { likedTracks, recentPlays } = this.props;

        const historyBadgeItems = recentPlays.length !== 0 ? recentPlays.map(track => 
            <TrackBadgeItem 
                track={track} 
                key={track.id} 
                track={track} 
                updateTrackPlays={this.props.updateTrackPlays}
        />) : null;

        const likesBadgeItems = likedTracks.map(track => 
            <TrackBadgeItem
                currentTrackId={this.props.currentTrackId}
                track={track} 
                key={track.id} 
                track={track} 
                updateTrackPlays={this.props.updateTrackPlays}
                pauseTrack={this.props.pauseTrack}
                playTrack={this.props.playTrack}
                currentTrackId={this.props.currentTrackId}
                trackStatus={this.props.trackStatus}
            />
        )


        return (
            <div>
                <div className="historyCollection">
                    <div className="playHistory">
                        <div className="playHistoryHeader">
                            <h2 className="phHeaderText">Recently played</h2>
                        </div>
                        <div className="playHistoryContent">
                            <div className="phBadges">
                                <ul className="phBadgeList">
                                    {historyBadgeItems}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="likesCollection">
                    <div className="likesSection">
                        <div className="lsHeader">
                            <h2 className="phHeaderText">Likes</h2>
                            <div>
                                <div className="phHeaderSub">
                                    <Link to="/discover">Browse trending playlists</Link>
                                </div>
                            </div>
                        </div>
                        <div className="lsContent">
                            <div className="phBadges">
                                <ul className="phBadgeList">
                                    {likesBadgeItems}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(LibraryOverview);