import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';
// import WaveFormContainer from '../waveform/waveform';

// const TrackItem = ({ track, updateTrackPlays }) => (
class TrackItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        this.handleArt = this.handleArt.bind(this);

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

    render() {
        const { track, updateTrackPlays } = this.props;

        return (
            <div className="activity-body">
                <div className="activity-artwork">
                    <div className="act-artwork-container">
                        <div className="image-placeholder">
                            <span
                                id={`artwork-image-official${this.props.track.id}`}
                                className="artwork-image-official"
                                // style={{ backgroundImage: "url(" + track.photoUrl + ")" }}
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
                                            onClick={() => updateTrackPlays(track)}>
                                            <div className="playbtn-arw">
                                                <FontAwesomeIcon icon={faPlay} />
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
                    <div className="waveform-container">
                        {/* <WaveFormContainer trackUrl={track.trackUrl}/> */}
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