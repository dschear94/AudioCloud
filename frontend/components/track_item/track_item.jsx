import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';
import WaveForm from '../waveform/waveform';
import Artwork from '../artwork/artwork';
import HeaderImage2 from '../artwork/header_image2';

class TrackItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        // this.handleArt = this.handleArt.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.handleLike = this.handleLike.bind(this);

        // let photo = new Image();
        // photo.src = this.props.track.photoUrl;
        // photo.onload = () => {
        //     this.handleArt();
        //     this.setState({ loading: false });
        // }
        
    }

    togglePlay() {
        if (this.props.currentTrackId === this.props.track.id) {
            if (this.props.trackStatus === "playing") {

                return this.props.pauseTrack();
            } else {
                return this.props.playTrack();
            }
        } else {

            this.props.updateTrackPlays(this.props.track).then(() => this.props.playTrack())
        }
    }

    handleLike(e) {
        e.preventDefault();

        if (this.props.currentUser.likedTracks) {
            if (this.props.track.id in this.props.currentUser.likedTracks) {
                let like = {};
                like.track_id = this.props.track.id;
                like.user_id = this.props.currentUser.id;
                this.props.deleteLike(like).then(()=> this.props.fetchTrack(this.props.track.id))
            } else {
                const like = Object.assign({
                    user_id: this.props.currentUser.id,
                    track_id: this.props.track.id
                })

                this.props.createLike(like).then(() => this.props.fetchTrack(this.props.track.id));
            }
        } else {
            const like = Object.assign({
                user_id: this.props.currentUser.id,
                track_id: this.props.track.id
            })

            this.props.createLike(like).then(() => this.props.fetchTrack(this.props.track.id));
        }



    }


    // handleArt() {
    //     document.getElementById(`artwork-image${this.props.track.id}`).style.backgroundImage = ("url(" + this.props.track.photoUrl + ")");
    // }

    render() {
        const { track, moduleType, updateTrackPlays, trackStatus, currentUser, currentTrackId, pauseTrack, playTrack, createLike, deleteLike } = this.props;

        const playPause = (currentTrackId === track.id && trackStatus === "playing") ?
            <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />; 

        const timeShow = moduleType !== "stream" ? (<div className="act-username-name" style={{ float: "right", paddingTop: "7px" }}>
            {relativeTime(track.created_at)}
        </div>) : null;

        const likeButton = this.props.currentUser.likedTracks ?
            (this.props.track.id in this.props.currentUser.likedTracks ?
                (<button
                    id="trackshowunlike"
                    style={{ height: "20px", lineHeight: "16px", fontSize: "11px" }}
                    className="trackshowunlike"
                    onClick={this.handleLike}
                >
                    <div className="trackshowlikeicon">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <span 
                    id="trackshowlike-text"
                    className="trackshowlike-text">
                        {track.numLikes}
                </span>
                </button>) :
                (<button
                    id="trackshowlike"
                    style={{ height: "20px", lineHeight: "16px", fontSize: "11px" }}
                    className="trackshowlike"
                    onClick={this.handleLike}
                >
                    <div className="trackshowlikeicon">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div 
                    id="trackshowlike-text"
                    className="trackshowlike-text">
                        {track.numLikes}
                </div>
                </button>)
            ) : (<button
                id="trackshowlike"
                style={{ height: "20px", lineHeight: "16px", fontSize: "11px" }}
                className="trackshowlike"
                onClick={this.handleLike}
            >
                <div className="trackshowlikeicon">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div 
                id="trackshowlike-text"
                className="trackshowlike-text">
                    {track.numLikes}
                </div>
            </button>
            );

            
            
        return (
            <div className="activity-body">
                <div className="activity-artwork">
                    <div className="act-artwork-container">
                        <div className="image-placeholder">
                            <Artwork track={track}/>
                        </div>
                    </div>
                </div>
                <div className="act-body-content">
                    <div className="act-body-header">
                        <div className="act-body-header-container">
                            <div className="act-title">
                                <div className="act-playbtn">
                                    <div className="act-playbtn-ctnr">
                                        <div
                                            className="playbtn"
                                            onClick={this.togglePlay}
                                            >
                                            <div className="playbtn-arw">
                                                {playPause}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="act-username">
                                    <div className="act-username-name">
                                        <Link to={`/${track.artist}`}>{track.artist}</Link>
                                    </div>
                                    <div className="act-username-title">
                                        <Link to={{
                                            pathname: `/${track.artist}/${track.title}`,
                                            state: {
                                                track
                                            }
                                        }}>{track.title}</Link>
                                    </div>
                                </div>
                                <div className="act-tags">
                                </div>
                                    {timeShow}
                            </div>
                        </div>
                    </div>
                    <div 
                    id="waveform-container"
                    className="waveform-container"
                    >
                            {/* <WaveForm track={track} /> */}
                            <HeaderImage2 track={track} currentUser={currentUser}/>
                    </div>
                    <div className="act-body-comment">

                    </div>
                    <div className="act-body-footer">
                        <div className="act-bf-actions">
                            <div className="act-bf-actions-ctnr">
                                {likeButton}
                            </div>
                        </div>
                        <div className="act-bf-right">
                            <ul className="sb-content-stats">
                                <li
                                    className="sb-stat-item">
                                    <FontAwesomeIcon icon={faPlay} />
                                    <div
                                        style={{ textIndent: "5px" }}
                                        className="sb-stat"
                                    >
                                        {track.play_count}
                                    </div>
                                </li>
                                <li className="sb-stat-item">
                                    <Link to={{
                                        pathname: `/${track.artist}/${track.title}`,
                                        state: {
                                            track
                                        }
                                    }}>
                                        <FontAwesomeIcon icon={faComment} />
                                        <div
                                            style={{ textIndent: "5px" }}
                                            className="sb-stat-link"
                                        >
                                            {track.numComments}
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }
    
}

export default TrackItem;