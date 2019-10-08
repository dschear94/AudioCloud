import React from 'react';
import { withRouter } from 'react-router-dom';

class Discover extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {
        const tracks = this.props.tracks.map(track => {
            return (
                <label>
                    {track.title}
                    <audio controls src={track.trackUrl}>{track.title}</audio>
                </label>
            )
        });
        return (
        
        <div>
                <h1>All tracks</h1>
                    {tracks}
        </div>

        );
    }
}


export default withRouter(Discover);