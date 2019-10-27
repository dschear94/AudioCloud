import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TrackStreamItem from './track_stream_item';

class Stream extends Component {
    componentDidMount() {
        if (this.props.tracks.length === 0) {
            this.props.fetchTracks();
        }
    }

    render() {
        const {tracks, receiveCurrentTrack} = this.props;
        return (
            <div className="content-left-container">
                <div className="stream-header">
                    <h1 className="stream-header-text">
                        Hear the latest posts from the people you're following:
                    </h1>
                </div>
                <ul className="stream-list">
                    {tracks.sort().reverse().map(track => <TrackStreamItem key={track.id} track={track} sendTrack={receiveCurrentTrack} />)}
                </ul>
            </div>
        );
    }
}

export default withRouter(Stream);