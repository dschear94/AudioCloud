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

class LibHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.props.fetchTracksByRecentPlays(this.props.currentUser.id);
    }

    render() {
        const { likedTracks, recentPlays, updateTrackPlays, pauseTrack, playTrack, currentTrackId, trackStatus } = this.props;

        const historyBadgeItems = recentPlays.reverse().map(track =>
            <TrackBadgeItem
                moduleType={"recentPlays"}
                currentTrackId={currentTrackId}
                key={track.id}
                track={track}
                updateTrackPlays={updateTrackPlays}
                pauseTrack={pauseTrack}
                playTrack={playTrack}
                trackStatus={trackStatus}
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
            </div>
        )
    }
}


export default withRouter(LibHistory);