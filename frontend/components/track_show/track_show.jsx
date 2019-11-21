import React from 'react';
import { Link } from 'react-router-dom';
import { faPlay, faHeart, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { relativeTime } from '../../util/time_util';
import TrackCommentIndexContainer from '../track_comments/track_comment_container';
import WaveForm from '../waveform/waveform';

import ColorThief from 'colorthief';
import * as Vibrant from 'node-vibrant';
import Artwork from '../artwork/artwork';
import Avatar from '../artwork/avatar';
import Avatar3 from '../artwork/avatar3';
import HeaderImage2 from '../artwork/header_image2';
import ShowSidebarContainer from '../social_sidebar/show_sidebar_container'

class TrackShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ""
        }

        // this.handleArt = this.handleArt.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    handleCommentChange(e) {
        this.setState({ comment: e.target.value });
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
                this.props.deleteLike(like)
            } else {
                const like = Object.assign({
                    user_id: this.props.currentUser.id,
                    track_id: this.props.track.id
                })

                this.props.createLike(like);
            }
        } else {
            const like = Object.assign({
                user_id: this.props.currentUser.id,
                track_id: this.props.track.id
            })

            this.props.createLike(like);
        }



    }

    handleCommentSubmit(e) {
        if (e.charCode === 13) {
            if (this.state.comment.length < 1000) {
                const comment = Object.assign({
                    track_id: this.props.track.id,
                    body: this.state.comment,
                    author_id: this.props.currentUser.id
                })
                
                this.props.createComment(comment);
                document.getElementById('commentinput').value = '';
            } else {
                // render errors
            }
        }
    }

    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        if ((this.props.match.params.artist !== this.props.track.artist) 
        && (this.props.match.params.track !== this.props.track.track)) {
            this.props.fetchTracksByArtist(this.props.match.params.artist)
            this.props.fetchArtist(this.props.match.params.artist)
        }
    }

    // handleArt(photo) {
    //     // const colorThief = new ColorThief();
    //     // const img = document.querySelector('img');

    //     // debugger
    //     // colorThief.getColor(photo);
    //     // debugger

    //     // debugger
    //     // let v = new Vibrant(this.props.currentUser.avatar);

    //     // v.getPalette(palette => console.log(palette));

    //     // Vibrant.from(this.props.currentUser.avatar).getPalette((err, palette) => console.log(palette))

    //     document.getElementById("artwork-image").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
    // }
    
    // handleAvatar() {
    //     document.getElementById("av-image").style.backgroundImage = "url(" + this.props.currentUser.avatar + ")"
    // }

    render() {
        const { track, artists, artist, deleteComment, trackStatus, fetchArtistsByTrackComments, updateTrackPlays, comments, fetchTrackComments, currentUser, currentTrackId } = this.props;
        const likeButton = this.props.currentUser.likedTracks ? 
       ( this.props.track.id in this.props.currentUser.likedTracks ?
           (<button
                id="trackshowunlike"
                className="trackshowunlike"
                onClick={this.handleLike}
                >
                <div className="trackshowlikeicon">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <span className="trackshowlike-text">
                    Liked
                </span>
            </button>) :
            (<button
                id="trackshowlike"
                className="trackshowlike"
                onClick={this.handleLike}
                >
                    <div className="trackshowlikeicon">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                <div className="trackshowlike-text">
                    Like
                </div>
                </button>)
                ) : (<button
                    id="trackshowlike"
                    className="trackshowlike"
                    onClick={this.handleLike}
                >
                    <div className="trackshowlikeicon">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="trackshowlike-text">
                        Like
                </div>
                </button>
                );

        // if (track.photoUrl) {
        //     let photo = new Image();
        //     photo.src = track.photoUrl;
        //     photo.onload = () => {
        //         this.handleArt(photo);
        //     }
        // }

        // if (currentUser.avatar) {
        //     let photo = new Image();
        //     photo.src = currentUser.avatar;
        //     photo.onload = () => {
        //         this.handleAvatar();
        //     }
        // }
        const playPause = (currentTrackId === track.id && trackStatus === "playing") ?
            <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />; 


        return (
        <div>
            <div className="show-hero-wrapper">
                <div className="show-hero">
                    <div
                    id="background-gradient"
                    style={{height: "100%"}}>

                            <HeaderImage2 track={track} currentUser={currentUser} />
                    </div>
                    <div className="show-h-fg">
                        <div className="s-h-artwork">
                            <div className="image-placeholder">
                                    <Artwork track={track} />
                            </div>
                        </div>
                        <div className="s-h-title">
                            <div className="s-h-title-container">
                                <div className="shtitle">
                                    <div 
                                    className="shtitle-play"
                                    
                                    >
                                        <div
                                            className="playbtn"
                                            onClick={this.togglePlay}
                                            style={{ lineHeight: "60px" }}
                                            >
                                            <div 
                                            className="playbtn-arw"
                                            style={{ fontSize: "20px" }}
                                            >
                                                {playPause}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shtitle-username">
                                        <div className="shtitle-username-container">
                                            <Link 
                                            to={`/${track.artist}`}
                                            className="shtu-text"
                                            >{track.artist}</Link>
                                        </div>
                                        <div className="shtitle-title">
                                            <span
                                                >{track.title}</span>
                                        </div>
                                    </div>
                                    <div className="shtitle-addtl">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-h-info">
                            <div className="shtime">
                                <span>{relativeTime(track.created_at)}</span>
                            </div>
                        </div>
                        <div className="s-h-player">
                            <div className="s-h-player-waveform">
                                    <div
                                        id="waveform-container"
                                        className="waveform-container"
                                        style={{ width: "100%", height: "100%" }}
                                    >
                                        <WaveForm track={track} />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="show-content-wrapper">
                <div className="show-content">
                    <div className="show-rows">
                        <div className="show-comment-container">
                            <div className="show-about-top">
                                <div className="lstn-eng">
                                    <div className="le-cc">
                                        <div className="le-cc1">
                                            <div className="le-cc2">
                                                <div className="cf-av">
                                                    {/* <div 
                                                    id="av-image"
                                                    className="av-image"
                                                    style={{ borderRadius: "0" }}
                                                    >

                                                    </div> */}
                                                    <Avatar currentUser={currentUser} />
                                                </div>
                                                <div className="cf-input-wrapper">
                                                        <input 
                                                            type="text" 
                                                            placeholder="Write a comment" 
                                                            title="Write a comment" 
                                                            className="cf-input"
                                                            id="commentinput"
                                                            onChange={this.handleCommentChange}
                                                            onKeyPress={this.handleCommentSubmit}
                                                            >
                                                        </input>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="le-foot">
                                        <div className="soundactions">
                                            <div className="soundactions-btns-container">
                                                {/* <button
                                                id="trackshowlike"
                                                className="trackshowlike"
                                                onClick={this.handleLike}
                                                >
                                                    <FontAwesomeIcon style={{left: "0px"}} icon={faHeart} />
                                                    <span className="trackshowlike-text">
                                                        Like
                                                    </span>
                                                </button> */}
                                                {likeButton}
                                                <button className="trackshowrepost">

                                                </button>
                                                <button className="trackshowshare">

                                                </button>
                                                <button className="trackshowaddnextup">

                                                </button>
                                                <button className="trackshowmore">

                                                </button>
                                            </div>
                                        </div>
                                        <ul className="soundStats">

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show-main-container">
                            <TrackCommentIndexContainer 
                                comments={comments}
                                artists={artists}
                                track={track}
                                currentUser={currentUser}
                                fetchTrackComments={fetchTrackComments}
                                deleteComment={deleteComment}
                                fetchArtistsByTrackComments={fetchArtistsByTrackComments}
                            />
                        </div>
                    </div>
                </div>
                {/* sidebar here */}
                    {/* <ShowSidebarContainer track={track} /> */}
            </div>
        </div>
        )
    }
}

export default TrackShow;