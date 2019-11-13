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
import TrackItem from '../track_item/track_item'

class ArtistAll extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        if (this.props.artistName !== this.props.artist.username) {
            this.props.fetchArtist(this.props.artistName)
            this.props.fetchTracksByArtist(this.props.artistName)
            // this.props.fetchTracksByLikes(this.props.artist.id)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.artistName !== prevProps.artistName) {
            this.props.fetchArtist(this.props.artistName)
            this.props.fetchTracksByArtist(this.props.artistName)
        }
    }

    render() {

        const { artist, tracks, updateTrackPlays, playTrack, pauseTrack, currentTrackId, trackStatus } = this.props;

        const trackItems = tracks.map(track =>
            <li
                key={track.id}
                className="track-stream-item">
                <TrackItem track={track} currentTrackId={currentTrackId} trackStatus={trackStatus} playTrack={playTrack} pauseTrack={pauseTrack} updateTrackPlays={updateTrackPlays}/>
            </li>
        )

        return (
            <ul className="artistTrackList">
                {trackItems}
            </ul>
        )
    }
}


export default withRouter(ArtistAll);