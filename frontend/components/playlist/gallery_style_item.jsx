import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class GalleryStyleItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true
        }
        
        this.handleArt = this.handleArt.bind(this);

    }

    handleArt() {
        if (document.getElementById(`artwork-image-official${this.props.uni}`)) {
            document.getElementById(`artwork-image-official${this.props.uni}`).style.backgroundImage = ("url(" + this.props.track.photoUrl + ")");
        }
    }

    render() {
        let photo = new Image();
        photo.src = this.props.track.photoUrl;
        photo.onload = () => {
            this.handleArt();
            // this.setState({ loading: false });
        }

        const { track } = this.props;

            return (

                <div
                    key={track.id}
                    className="track-discover-main-modular-module-gallery-item"
                    
                    >
                    <div className="splash-main-content1-trendingtracks-tile">
                        <div 
                            className="splash-main-content1-trendingtracks-tile-artwork"
                            onClick={() => this.props.updateTrackPlays(track)}>
                            <div className="splash-main-content1-trendingtracks-tile-artwork-image">
                                <div className="image-placeholder">
                                    <span
                                        id={`artwork-image-official${this.props.uni}`}
                                        className="artwork-image-official"
                                        >
                                        </span>
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