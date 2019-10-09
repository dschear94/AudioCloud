import React from 'react';
import { withRouter } from 'react-router-dom';

class Discover extends React.Component {
    constructor(props) {
        super(props);

        // this.updatePlayBar = this.updatePlayBar.bind(this);
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    // updatePlayBar(track) {
    //     return this.props.receiveCurrentTrack(track);
    // }

    render() {
        const tracks = this.props.tracks.map(track => {
            return (
                <div >
                        {/* <audio controls src={track.trackUrl}>{track.title}</audio> */}
                    <input 
                        type="button" 
                        value={track.title} 
                        onClick={() => this.props.receiveCurrentTrack(track)}
                    />
                    <br />
                </div>
            )
        });
        return (
        
            <div className="discover-main">
                    <h1>All tracks</h1>
                        {tracks}
            </div>

        );
    }
}


export default withRouter(Discover);