import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';
import WaveForm from '../waveform/waveform';

// const TrackItem = ({ track, updateTrackPlays }) => (
class TrackItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        this.handleArt = this.handleArt.bind(this);
        this.togglePlay = this.togglePlay.bind(this);

        // let photo = new Image();
        // photo.src = this.props.track.photoUrl;
        // photo.onload = () => {
        //     this.handleArt();
        //     this.setState({ loading: false });
        // }
        
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


    handleArt() {
        document.getElementById(`artwork-image${this.props.track.id}`).style.backgroundImage = ("url(" + this.props.track.photoUrl + ")");
    }

    render() {
        const { track, currentTrackId, trackStatus } = this.props;
        const playPause = (currentTrackId === track.id && trackStatus === "playing") ?
            <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />; 

        return (
            <div className="activity-body">
                <div className="activity-artwork">
                    <div className="act-artwork-container">
                        <div className="image-placeholder">
                            <span
                                id={`artwork-image${track.id}`}
                                className="artwork-image"
                                style={{ backgroundImage: "url(" + track.photoUrl + ")" }}
                                ></span>
                        </div>
                    </div>
                </div>
                <div className="act-body-content">
                    <div className="act-body-header">
                        <div className="act-body-header-container">
                            <div className="act-title">
                                <div className="act-playbtn">
                                    <div className="act-playbtn-ctnr">
                                        <div
                                            className="playbtn"
                                            onClick={this.togglePlay}
                                            >
                                            <div className="playbtn-arw">
                                                {playPause}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="act-username">
                                    <div className="act-username-name">
                                        <Link to={`/${track.artist}`}>{track.artist}</Link>
                                    </div>
                                    <div className="act-username-title">
                                        <Link to={{
                                            pathname: `/${track.artist}/${track.title}`,
                                            state: {
                                                track
                                            }
                                        }}>{track.title}</Link>
                                    </div>
                                </div>
                                <div className="act-tags">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                    id="waveform-container"
                    className="waveform-container"
                    >
                            {/* <WaveForm track={track} /> */}
                    </div>
                </div>
                <div className="act-body-comment">

                </div>
                <div className="act-body-footer">

                </div>

            </div>
        )
    }
    
}

export default TrackItem;