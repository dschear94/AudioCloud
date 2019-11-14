import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import GalleryStyleItem from './gallery_style_item'

class GalleryStyle extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        // debugger

        const { uni, tracks, currentTrackId, trackStatus, moduleType, createLike, deleteLike, fetchTrack, currentUser, updateTrackPlays, pauseTrack, playTrack } = this.props;
        
        const trackitemgal = (tracks.slice(0, 8).map(track => 
            <GalleryStyleItem
                key={`${track.id} + " " + ${uni}`} 
                uni={`${track.id} + " " + ${uni}`} 
                track={track}
                updateTrackPlays={updateTrackPlays}
                pauseTrack={pauseTrack}
                playTrack={playTrack}
                currentTrackId={currentTrackId}
                trackStatus={trackStatus}
                createLike={createLike}
                currentUser={currentUser}
                deleteLike={deleteLike}
                fetchTrack={fetchTrack}
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