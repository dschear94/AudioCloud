import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import GalleryStyleItem from './gallery_style_item'

class GalleryStyle extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        
        const trackitemgal = (this.props.tracks.slice(0, 8).map(track => 
            <GalleryStyleItem
                key={`${track.id} + " " + ${this.props.uni}`} 
                uni={`${track.id} + " " + ${this.props.uni}`} 
                track={track}
                updateTrackPlays={this.props.updateTrackPlays}
                pauseTrack={this.props.pauseTrack}
                playTrack={this.props.playTrack}
                currentTrackId={this.props.currentTrackId}
                trackStatus={this.props.trackStatus}
            />));

        return (
            <div className="track-discover-main-modular-module">
                <div className="track-discover-main-modular-module-title">
                    <h2 className="track-discover-main-modular-module-title-header">
                        AudioCloud Selects
                    </h2>
                    <p className="track-discover-main-modular-module-title-body">
                        Selected tracks curated just for you.
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