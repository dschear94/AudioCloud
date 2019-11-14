import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TrackStreamItem from './track_stream_item';
import SocialSidebarContainer from '../social_sidebar/social_sidebar_container'

class Stream extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.fetchTracksByFollows(this.props.currentUser.id).then(() => this.setState({ loading: false }))
        // window.onload = () => this.setState({ loading: false })
    }

    render() {
        const { tracks, createLike, deleteLike, fetchTrack, currentUser, updateTrackPlays, trackStatus, currentTrackId, pauseTrack, playTrack } = this.props;
        
        const loader = this.state.loading ? (
     <div className="loading-spinner-background"><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></div>
        ) : (
                <div>
                    <div className="stream-header">
                        <h1 className="stream-header-text">
                            Hear the latest posts from the people you're following:
                    </h1>
                    </div>
                    <ul className="stream-list">
                        {tracks.sort().reverse().map(track => <TrackStreamItem
                            key={track.id}
                            track={track}
                            currentTrackId={currentTrackId}
                            updateTrackPlays={updateTrackPlays}
                            pauseTrack={pauseTrack}
                            playTrack={playTrack}
                            trackStatus={trackStatus}
                            currentUser={currentUser}
                            createLike={createLike}
                            deleteLike={deleteLike}
                            fetchTrack={fetchTrack}
                        />)}
                    </ul>
                </div>
        )

        return (
                <div className="content-left-container">
                    {loader}
                </div>
        );
    }
}

export default withRouter(Stream);