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
import TrackStreamItem from '../stream/track_stream_item'

class ArtistTracks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.artistName !== this.props.artist.username) {
            this.props.fetchArtist(this.props.artistName)
            this.props.fetchTracksByArtist(this.props.artistName)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.artistName !== prevProps.artistName) {
            this.props.fetchArtist(this.props.artistName)
            this.props.fetchTracksByArtist(this.props.artistName)
        }
    }

    render() {

        const { artist } = this.props;

        return (
            <div>
                "hi"
            </div>
        );
    }
}


export default withRouter(ArtistTracks);