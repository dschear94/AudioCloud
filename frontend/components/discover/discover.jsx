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
                <div className="track-discover-main-container">
                    <ul className="track-discover-main-modular-list">
                        {/* below is dynamic */}
                        <li className="track-discover-main-modular-item">
                            <div className="track-discover-main-modular-module">
                                <div className="track-discover-main-modular-module-title">
                                    <h2 className="track-discover-main-modular-module-title-header">
                                        AudioCloud Weekly
                                    </h2>
                                    <p className="track-discover-main-modular-module-title-body">
                                        All of AudioCloud. Just for you.
                                    </p>
                                </div>
                                <div className="track-discover-main-modular-module-content">
                                    <div className="track-discover-main-modular-module-content-gradient">
                                        <div className="track-discover-main-modular-module-content-gradient2"></div>
                                    </div>
                                    <div className="track-discover-main-modular-module-content-artwork">
                                        <div className="track-discover-main-modular-module-content-artwork-image">
                                            <div className="track-discover-main-modular-module-content-artwork-image-ph">
                                                <span className="track-discover-main-modular-module-content-artwork-image-main"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="track-discover-main-modular-module-content-tracklist">
                                        <div className="track-discover-main-modular-module-content-tracklist-area">

                                        </div>
                                    </div>
                                </div>
                                <div className="track-discover-main-modular-module-context">

                                </div>
                            </div>
                        </li>
                        {/* above is dynamic */}
                    </ul>
                </div>
                <div className="track-discover-social-container">

                </div>
            </div>

        );
    }
}


export default withRouter(Discover);