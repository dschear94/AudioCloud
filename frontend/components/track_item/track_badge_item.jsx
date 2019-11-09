import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';

const TrackBadgeItem = ({ track, updateTrackPlays }) => (
    <li
        key={track.id}
        className="splash-main-content1-trendingtracks-content-item">
        <div className="splash-main-content1-trendingtracks-tile">
            <div
                className="splash-main-content1-trendingtracks-tile-artwork"
                onClick={() => updateTrackPlays(track)}
            >
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
    </li>
);

export default TrackBadgeItem;