import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyleItem from './list_style_item';

class ListStyle extends React.Component {
    constructor(props) {
        super(props);

        this.handleArt = this.handleArt.bind(this);
    }

    // componentDidMount() {
    //     // document.getElementById("track-discover-main-modular-module-content-artwork-image-main").style.backgroundImage = "url(" + this.props.tracks[0].photoUrl + ")"
    // }
    
    // componentDidUpdate(prevProps) {
    //     if (this.props.tracks !== prevProps.tracks) {
    //     document.getElementById("track-discover-main-modular-module-content-artwork-image-main").style.backgroundImage = "url(" + this.props.tracks[0].photoUrl + ")"
    //     } else {
    //         document.getElementById("track-discover-main-modular-module-content-artwork-image-main").style.backgroundImage = "url(" + this.props.tracks[0].photoUrl + ")"
    //     }
    // }

    handleArt() {
        document.getElementById(`track-discover-main-modular-module-content-artwork-image-main${this.props.uni}`).style.backgroundImage = "url(" + this.props.tracks[0].photoUrl + ")"
    }

    render() {
        const trackitem = this.props.tracks.map(track => 
            <ListStyleItem 
                key={`${track.id} + " " + ${this.props.uni}`}
                uni={`${track.id} + " " + ${this.props.uni}`} 
                track={track} 
                receiveCurrentTrack={this.props.receiveCurrentTrack}
            />)

        if (this.props.tracks[0]) {
            let photo = new Image();
            photo.src = this.props.tracks[0].photoUrl;
            photo.onload = () => {
                this.handleArt();
            }
        }

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
                                                id={`track-discover-main-modular-module-content-artwork-image-main${this.props.uni}`}
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