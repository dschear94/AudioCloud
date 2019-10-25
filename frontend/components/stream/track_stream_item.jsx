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
                            style={{ backgroundImage: "url(" + track.artist.photoUrl + ")" }}
                            >
                                {/* revisit */}
                        </div>
                    </div>
                    <div className="activity-text">
                        <Link className="activity-text-username" to={`/${track.artist}`}>{track.artist}</Link>
                        {" posted a track "}
                    </div>
                    <time 
                        className="activity-time">
                        {relativeTime(track.created_at)}
                    </time>
                </div>
                <div className="activity-body">

                </div>
            </div>
        </div>
            <Link to={`/${track.artist}/${track.title}`}>{track.title}</Link>
        <div
        key={track.id}
        onClick={() => this.props.receiveCurrentTrack(track)}>
            <div className="splash-main-content1-trendingtracks-tile-artwork">
                <div className="splash-main-content1-trendingtracks-tile-artwork-image">
                    <div className="splash-main-content1-trendingtracks-tile-artwork-image-placeholder">
                        <span
                            className="splash-main-content1-trendingtracks-tile-artwork-image-official"
                            style={{ backgroundImage: "url(" + track.photoUrl + ")" }}></span>
                    </div>
                </div>
                <button className="splash-main-content1-trendingtracks-tile-playbtn-container">
                </button>
            </div>
        </div>
    </li>
);

export default TrackStreamItem;
