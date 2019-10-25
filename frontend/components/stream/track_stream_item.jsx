import React from 'react';
import { Link } from 'react-router-dom';
import {relativeTime} from '../../util/time_util';

const TrackStreamItem = ({ track }) => (
    <li className="track-stream-item">
        <div className="activity">
            <div className="activity-content">
                <div className="activity-header">
                    <div className="activity-avatar">
                        <div 
                            className="avatar-body"
                            // style={{ backgroundImage: "url(" + track.artist.photoUrl + ")" }}
                            >
                                {/* revisit */}
                        </div>
                    </div>
                    <div className="activity-text">
                        <Link className="activity-text-username" to={`/${track.artist}`}>{track.artist}</Link>
                        {` posted a track ${relativeTime(track.created_at)}`}
                    </div>
                </div>
                <div className="activity-body">
                    <div className="activity-artwork">
                        <div className="act-artwork-container">
                            <div className="image-placeholder">
                                <span
                                    className="splash-main-content1-trendingtracks-tile-artwork-image-official"
                                    style={{ backgroundImage: "url(" + track.photoUrl + ")" }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="act-body-content">
                        <div className="act-body-header">
                            <div className="act-body-header-container">
                                <div className="act-title">
                                    <div className="act-playbtn">
                                        <div 
                                            className="playbtn"
                                            onClick={() => this.props.receiveCurrentTrack(track)}>
                                        </div>
                                    </div>
                                    <div className="act-username">
                                        <Link to={`/${track.artist}/${track.title}`}>{track.title}</Link>
                                    </div>
                                    <div className="act-tags">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="waveform-container">

                        </div>
                        </div>
                        <div className="act-body-comment">

                        </div>
                        <div className="act-body-footer">

                        </div>

                    </div>
                </div>
            </div>
        {/* </div> */}
    </li>
);

export default TrackStreamItem;
