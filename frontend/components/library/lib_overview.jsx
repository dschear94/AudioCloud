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
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.props.fetchTracksByLikes(this.props.currentUser.id);
        this.props.fetchTracksByRecentPlays(this.props.currentUser.id);
    }

    // shouldComponentUpdate(prevProps, prevState) {
    //     debugger
    //     if (this.props.likedTracks.length === prevProps.likedTracks.length) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    render() {
        const { likedTracks, recentPlays, updateTrackPlays, pauseTrack, playTrack, currentTrackId, trackStatus, createLike, deleteLike, fetchTrack, currentUser} = this.props;

        const historyBadgeItems = recentPlays.reverse().slice(0, 6).map(track => 
            <TrackBadgeItem
                moduleType={"recentPlays"}
                currentTrackId={currentTrackId}
                key={track.id}
                track={track}
                updateTrackPlays={updateTrackPlays}
                pauseTrack={pauseTrack}
                playTrack={playTrack}
                trackStatus={trackStatus}
                currentUser={currentUser}
                createLike={createLike}
                deleteLike={deleteLike}
                fetchTrack={fetchTrack}
        />
        )

        const likesBadgeItems = likedTracks.reverse().slice(0, 6).map(track => 
            <TrackBadgeItem
                moduleType={"likedTracks"}
                currentTrackId={currentTrackId}
                key={track.id} 
                track={track} 
                updateTrackPlays={updateTrackPlays}
                pauseTrack={pauseTrack}
                playTrack={playTrack}
                currentTrackId={currentTrackId}
                trackStatus={trackStatus}
                currentUser={currentUser}
                createLike={createLike}
                deleteLike={deleteLike}
                fetchTrack={fetchTrack}
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