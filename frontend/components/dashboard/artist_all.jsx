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
        if (this.props.artistName !== this.props.artist.username) {
            debugger
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

        const { artist, tracks, sendTrack } = this.props;

        const trackItems = tracks.map(track =>
            <li
                key={track.id}
                className="track-stream-item">
                <TrackItem track={track} sendTrack={sendTrack}/>
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