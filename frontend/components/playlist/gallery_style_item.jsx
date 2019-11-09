import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class GalleryStyleItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleArt = this.handleArt.bind(this);
    }

    handleArt() {
        document.getElementById(`artwork-image-official${this.props.uni}`).style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
    }

    render() {

        const { track } = this.props;

        let photo = new Image();
        photo.src = track.photoUrl;
        photo.onload = () => {
            this.handleArt();
        }

            return (
                <div
                    key={track.id}
                    className="track-discover-main-modular-module-gallery-item"
                    onClick={() => this.props.updateTrackPlays(track)}>
                    <div className="splash-main-content1-trendingtracks-tile">
                        <div className="splash-main-content1-trendingtracks-tile-artwork">
                            <div className="splash-main-content1-trendingtracks-tile-artwork-image">
                                <div className="image-placeholder">
                                    <span
                                        id={`artwork-image-official${this.props.uni}`}
                                        className="artwork-image-official"
                                        // style={{ backgroundImage: "url(" + track.photoUrl + ")" }}
                                        ></span>
                                </div>
                            </div>
                            <button className="splash-main-content1-trendingtracks-tile-playbtn-container">
                            </button>
                        </div>
                        <div className="splash-main-content1-trendingtracks-tile-description">
                            <div className="splash-main-content1-trendingtracks-tile-description1">
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
                </div>
            );        
    }
}


export default withRouter(GalleryStyleItem);