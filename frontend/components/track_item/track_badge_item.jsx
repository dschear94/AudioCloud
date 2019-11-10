import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';

class TrackBadgeItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        this.handleArt = this.handleArt.bind(this);
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
        document.getElementById(`artwork-image-official${this.props.track.id}`).style.backgroundImage = ("url(" + this.props.track.photoUrl + ")");
    }

    showControls() {
        document.getElementById(`splash-main-content1-trendingtracks-tile-playbtn-container${this.props.track.id}`).style.opacity = "1"
        document.getElementById(`splash-main-content1-trendingtracks-tile-playbtn-container${this.props.track.id}`).style.visibility = "visible"
    }

    hideControls() {
        document.getElementById(`splash-main-content1-trendingtracks-tile-playbtn-container${this.props.track.id}`).style.opacity = "0"
        document.getElementById(`splash-main-content1-trendingtracks-tile-playbtn-container${this.props.track.id}`).style.visibility = "hidden"
    }

    render() {
        const { track, updateTrackPlays } = this.props;


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
                                    id={`artwork-image-official${this.props.track.id}`}
                                    className="artwork-image-official"
                                >
                                </span>
                            </div>
                        </div>
                            
                        <div 
                                id={`splash-main-content1-trendingtracks-tile-playbtn-container${this.props.track.id}`}
                            className="splash-main-content1-trendingtracks-tile-playbtn-container">
                            <button
                                className="shtitle-play"
                                // style={{ opacity: "0", visibility: "hidden" }}
                            >
                                <div
                                    className="playbtn"
                                    onClick={() => updateTrackPlays(track)}
                                    style={{ lineHeight: "60px", zIndex:"101" }}
                                >
                                    <div
                                        className="playbtn-arw"
                                        style={{ fontSize: "20px" }}
                                    >
                                        <FontAwesomeIcon icon={faPlay} />
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