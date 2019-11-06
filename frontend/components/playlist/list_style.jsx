import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ListStyle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // document.getElementById("track-discover-main-modular-module-content-artwork-image-main").style.backgroundImage = "url(" + this.props.tracks[0].photoUrl + ")"
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.tracks !== prevProps.tracks) {
        document.getElementById("track-discover-main-modular-module-content-artwork-image-main").style.backgroundImage = "url(" + this.props.tracks[0].photoUrl + ")"
        } else {
            document.getElementById("track-discover-main-modular-module-content-artwork-image-main").style.backgroundImage = "url(" + this.props.tracks[0].photoUrl + ")"
        }
    }

    render() {
        const trackitem = this.props.tracks.map(track => {
            return (

                <li
                    key={track.id}
                    onClick={() => this.props.receiveCurrentTrack(track)}
                    className="track-discover-main-modular-module-content-tracklist-item">
                    <div className="track-discover-main-modular-module-content-tracklist-item-a">
                        <div className="track-discover-main-modular-module-content-tracklist-item-a1">
                            <span className="track-discover-main-modular-module-content-tracklist-item-a1-artist">
                                {track.artist}
                            </span>
                            <span className="track-discover-main-modular-module-content-tracklist-item-a1-title">
                                {track.title}
                            </span>
                        </div>
                        <div className="track-discover-main-modular-module-content-tracklist-item-a2">
                            <div className="track-discover-main-modular-module-content-tracklist-item-a2-content">
                                {/* numplays */}1000
                            </div>
                        </div>
                    </div>
                </li>
            )
        });

        return (
                <ul className="track-discover-main-modular-list">
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
                                            <div
                                                id="track-discover-main-modular-module-content-artwork-image-main"
                                                className="track-discover-main-modular-module-content-artwork-image-main"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="track-discover-main-modular-module-content-tracklist">
                                    <div className="track-discover-main-modular-module-content-tracklist-area">
                                        <div className="track-discover-main-modular-module-content-tracklist-area2">
                                            <div className="track-discover-main-modular-module-content-tracklist-scrollable">
                                                <ul className="track-discover-main-modular-module-content-tracklist-list">
                                                    {trackitem}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="track-discover-main-modular-module-context">
                                <div className="track-discover-main-modular-module-context-icon-container">
                                    <div className="track-discover-main-modular-module-context-icon-body">
                                        <div className="track-discover-main-modular-module-context-icon-image">
                                            <div
                                                className="track-discover-main-modular-module-context-icon-image-content">
                                                {/* image */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="track-discover-main-modular-module-context-body">
                                    Based on your listening history
                                    </span>
                            </div>
                        </div>
                    </li>
            </ul>
        )
    }
}


export default withRouter(ListStyle);