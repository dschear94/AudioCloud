import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { faPlay, faHeart, faChild, faSignOutAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            <span 
                            style={{textIndent:"7px"}}
                            className="track-discover-main-modular-module-content-tracklist-item-a1-title">
                                -{track.title}
                            </span>
                        </div>
                        <div className="track-discover-main-modular-module-content-tracklist-item-a2">
                            <div style={{fontSize:"11px"}}>
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                            <div className="track-discover-main-modular-module-content-tracklist-item-a2-content">
                                <div
                                    style={{textIndent: "8px"}}
                                    >
                                    {track.play_count}
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            )
    }
}


export default withRouter(ListStyleItem);