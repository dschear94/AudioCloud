import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ListStyleItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { track } = this.props;

            return (
                <li
                    key={track.id}
                    onClick={() => this.props.updateTrackPlays(track)}
                    className="track-discover-main-modular-module-content-tracklist-item">
                    <div className="track-discover-main-modular-module-content-tracklist-item-a">
                        <div className="track-discover-main-modular-module-content-tracklist-item-a1">
                            <span className="track-discover-main-modular-module-content-tracklist-item-a1-artist">
                                {track.artist}
                            </span>
                            <span className="track-discover-main-modular-module-content-tracklist-item-a1-title">
                                {track.title}
                            </span>
                        </div>
                        <div className="track-discover-main-modular-module-content-tracklist-item-a2">
                            <div className="track-discover-main-modular-module-content-tracklist-item-a2-content">
                                {track.play_count}
                            </div>
                        </div>
                    </div>
                </li>
            )
    }
}


export default withRouter(ListStyleItem);