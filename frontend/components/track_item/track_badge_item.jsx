import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';

class TrackBadgeItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        this.handleArt = this.handleArt.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.showControls = this.showControls.bind(this);
        this.hideControls = this.hideControls.bind(this);

        let photo = new Image();
        photo.src = this.props.track.photoUrl;
        photo.onload = () => {
            this.handleArt();
            this.setState({ loading: false });
        }

    }


    handleArt() {
        document.getElementById(`artwork-image${this.props.track.id}`).style.backgroundImage = ("url(" + this.props.track.photoUrl + ")");
    }

    showControls() {
        document.getElementById(`tile-playbtn-container${this.props.track.id}`).style.opacity = "1"
        document.getElementById(`tile-playbtn-container${this.props.track.id}`).style.visibility = "visible"
    }

    hideControls() {
        document.getElementById(`tile-playbtn-container${this.props.track.id}`).style.opacity = "0"
        document.getElementById(`tile-playbtn-container${this.props.track.id}`).style.visibility = "hidden"
    }

    togglePlay() {
        if (this.props.currentTrackId === this.props.track.id) {
            if (this.props.trackStatus === "playing") {

                return this.props.pauseTrack();
            } else {
                return this.props.playTrack();
            }
        } else {
            
            this.props.updateTrackPlays(this.props.track).then(() => this.props.playTrack())
        }
    }

    render() {
        const { track, currentTrackId, trackStatus } = this.props;
        const playPause = (currentTrackId === track.id && trackStatus === "playing") ?
            <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />; 
        return (
            <li
                key={track.id}
                className="splash-main-content1-trendingtracks-content-item">
                <div className="splash-main-content1-trendingtracks-tile">
                    <div
                        className="splash-main-content1-trendingtracks-tile-artwork"
                        onMouseEnter={this.showControls}
                        onMouseLeave={this.hideControls}
                    >
                        <div className="splash-main-content1-trendingtracks-tile-artwork-image">
                            <div className="image-placeholder">
                                <span
                                    id={`artwork-image${track.id}`}
                                    className="artwork-image"
                                >
                                </span>
                            </div>
                        </div>
                            
                        <div 
                                id={`tile-playbtn-container${track.id}`}
                            className="tile-playbtn-container">
                            <button
                                className="shtitle-play"
                                // style={{ opacity: "0", visibility: "hidden" }}
                            >
                                <div
                                    className="playbtn"
                                    onClick={this.togglePlay}
                                    style={{ lineHeight: "60px", zIndex:"101" }}
                                >
                                    <div
                                        className="playbtn-arw"
                                        style={{ fontSize: "20px" }}
                                    >
                                        {playPause}
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="splash-main-content1-trendingtracks-tile-description">
                        <div 
                        id={`splash-main-content1-trendingtracks-tile-description1${track.id}`}
                        className="splash-main-content1-trendingtracks-tile-description1"
                        >
                            <Link to={{
                                pathname: `/${track.artist}/${track.title}`,
                                state: {
                                    track
                                }
                            }}>{track.title}</Link>
                        </div>
                        <div className="splash-main-content1-trendingtracks-tile-description2">
                            <Link to={{
                                pathname: `/${track.artist}`,
                            }}>{track.artist}</Link>
                        </div>
                    </div>
                </div>
            </li> 
            )
    }
}

export default TrackBadgeItem;