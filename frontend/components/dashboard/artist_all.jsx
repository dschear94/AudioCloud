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
import { relativeTime } from '../../util/time_util';

class ArtistAll extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.props.fetchArtist(this.props.artistName)
            this.props.fetchTracksByArtist(this.props.artistName)
    }

    componentDidUpdate(prevProps) {
        if (this.props.artistName !== prevProps.artistName) {
            this.props.fetchArtist(this.props.artistName)
            this.props.fetchTracksByArtist(this.props.artistName)
        }
    }

    render() {

        const { tracks, createLike, deleteLike, fetchTrack, currentUser, updateTrackPlays, trackStatus, currentTrackId, pauseTrack, playTrack } = this.props;

        const trackItems = tracks.reverse().map(track =>
            <li
                key={track.id}
                className="track-stream-item">

                <TrackItem track={track} moduleType={"artistAll"} createLike={createLike} deleteLike={deleteLike} fetchTrack={fetchTrack} currentUser={currentUser} currentTrackId={currentTrackId} trackStatus={trackStatus} playTrack={playTrack} pauseTrack={pauseTrack} updateTrackPlays={updateTrackPlays}/>
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