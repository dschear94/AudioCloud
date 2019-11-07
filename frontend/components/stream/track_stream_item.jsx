import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import {relativeTime} from '../../util/time_util';
import TrackItem from '../track_item/track_item'
// import WaveFormContainer from '../waveform/waveform';

const TrackStreamItem = ({ track, sendTrack }) => (
    <li className="track-stream-item">
        <div className="activity">
            <div className="activity-content">
                <div className="activity-header">
                    <div className="activity-avatar">
                        <div 
                            className="avatar-body"
                        >
                            <div
                                className="av-image"
                                style={{ backgroundImage: "url(" + track.artistAvatar + ")" }}>
                            </div>
                        </div>
                    </div>
                    <div className="activity-text">
                        <Link className="activity-text-username" to={`/${track.artist}`}>{track.artist}</Link>
                        {` posted a track ${relativeTime(track.created_at)}`}
                    </div>
                </div>
                <TrackItem key={track.id} track={track}/>
            </div>
        </div>
        <div className="act-body-comment">

        </div>
        <div className="act-body-footer">

        </div>
    </li>
);

export default TrackStreamItem;
