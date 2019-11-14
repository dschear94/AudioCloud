import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import {relativeTime} from '../../util/time_util';
import TrackItem from '../track_item/track_item'
import Artwork from '../artwork/artwork';
import Avatar2 from '../artwork/avatar2'
// import WaveFormContainer from '../waveform/waveform';


class TrackStreamItem extends React.Component {
    constructor(props) {
        super(props); 
    }

    render () {
        const { track, currentUser, fetchTrack, updateTrackPlays, trackStatus, currentTrackId, pauseTrack, playTrack, createLike, deleteLike } = this.props;

    return (
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
                                    >
                                        <Avatar2 track={track}/>
                                </div>
                            </div>
                        </div>
                        <div className="activity-text">
                            <Link className="activity-text-username" to={`/${track.artist}`}>{track.artist}</Link>
                            {` posted a track ${relativeTime(track.created_at)}`}
                        </div>
                    </div>
                    <TrackItem 
                    key={track.id} 
                    track={track} 
                    currentTrackId={currentTrackId} 
                    updateTrackPlays={updateTrackPlays}
                    pauseTrack={pauseTrack}
                    playTrack={playTrack}
                    trackStatus={trackStatus}
                    currentUser={currentUser}
                    createLike={createLike}
                    deleteLike={deleteLike}
                    fetchTrack={fetchTrack}
                    moduleType={"stream"}
                    />
                    <div className="act-body-comment">

                    </div>
                </div>
            </div>
            
    </li>
    );
    }
}

export default TrackStreamItem;
