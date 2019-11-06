import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class GalleryStyle extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    // }

    render() {
        
        const trackitemgal = (this.props.tracks.slice(0, 8).map(track => {

            return (
                <div
                    key={track.id}
                    className="track-discover-main-modular-module-gallery-item"
                    onClick={() => this.props.receiveCurrentTrack(track)}>
                    <div className="splash-main-content1-trendingtracks-tile">
                        <div className="splash-main-content1-trendingtracks-tile-artwork">
                            <div className="splash-main-content1-trendingtracks-tile-artwork-image">
                                <div className="image-placeholder">
                                    <span
                                        className="artwork-image-official"
                                        style={{ backgroundImage: "url(" + track.photoUrl + ")" }}></span>
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
        })

        );
        return (
            <div className="track-discover-main-modular-module">
                <div className="track-discover-main-modular-module-title">
                    <h2 className="track-discover-main-modular-module-title-header">
                        AudioCloud Weekly
                    </h2>
                    <p className="track-discover-main-modular-module-title-body">
                        All of AudioCloud. Just for you.
                    </p>
                </div>
                <div className="track-discover-main-modular-module-content2">
                    <div className="track-discover-main-modular-module-gallery">
                        <div className="track-discover-main-modular-module-gallery-ctr">
                            <div className="track-discover-main-modular-module-gallery-slider">
                                {trackitemgal}
                            </div>
                        </div>
                    </div>
                    <div className="track-discover-main-modular-module-fwd">

                    </div>
                    <div className="track-discover-main-modular-module-bwd">

                    </div>
                </div>
                <div className="track-discover-main-modular-module-context">
                    <span className="track-discover-main-modular-module-context-body">
                        Based on your listening history
                    </span>
                </div>
            </div>
        )
    }
}


export default withRouter(GalleryStyle);