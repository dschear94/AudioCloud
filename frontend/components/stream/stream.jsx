import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TrackStreamItem from './track_stream_item';

class Stream extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.fetchTracksByFollows(this.props.currentUser.id).then(() => this.setState({loading: false}));
    }

    render() {
        const { tracks, updateTrackPlays} = this.props;
        return this.state.loading ? (
            <div className="loading-spinner-background"><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></div>
            ) : (
            <div className="content-left-container">
                <div className="stream-header">
                    <h1 className="stream-header-text">
                        Hear the latest posts from the people you're following:
                    </h1>
                </div>
                <ul className="stream-list">
                    {tracks.sort().reverse().map(track => <TrackStreamItem key={track.id} track={track} updateTrackPlays={updateTrackPlays} />)}
                </ul>
            </div>
        );
    }
}

export default withRouter(Stream);