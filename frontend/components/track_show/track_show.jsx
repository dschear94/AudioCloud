import React from 'react';
import { withRouter } from 'react-router-dom';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class TrackShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if ((this.props.match.params.artist !== this.props.track.artist) 
            && (this.props.match.params.track !== this.props.track.track)) {
            this.props.fetchArtist(this.props.match.params.artist)
                .then(() => {
                    document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
                });
        }
    }

    render() {
        const {track, sendTrack} = this.props;
        return (
        <div>
            <div className="show-hero-wrapper">
                <div className="show-hero">
                    <div style={{height: "100%"}}>

                    </div>
                    <div className="show-h-fg">
                        <div className="s-h-artwork">
                            <div className="image-placeholder">
                                <span
                                    id="artwork-image-official"
                                    className="artwork-image-official"
                                    style={{ backgroundImage: "url(" + track.photoUrl ? track.photoUrl : null + ")" }}
                                    ></span>
                            </div>
                        </div>
                        <div className="s-h-title">
                            <div className="s-h-title-container">
                                <div className="shtitle">
                                    <div className="shtitle-play">
                                        <div
                                            className="playbtn"
                                            onClick={() => sendTrack(track)}
                                            >
                                            <div className="playbtn-arw">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shtitle-username">

                                    </div>
                                    <div className="shtitle-addtl">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-h-info">

                        </div>
                        <div className="s-h-player">

                        </div>
                    </div>
                </div>
            </div>
            <div className="show-content-wrapper">
                <div className="show-content">

                </div>
            </div>
        </div>
        )
    }
}

export default TrackShow;