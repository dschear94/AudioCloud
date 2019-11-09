import React from 'react';
import { Link } from 'react-router-dom';
import { faPlay, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { relativeTime } from '../../util/time_util';
import TrackCommentIndexContainer from '../track_comments/track_comment_container';

import ColorThief from 'colorthief';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ""
        }

        this.handleArt = this.handleArt.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    handleCommentChange(e) {
        this.setState({ comment: e.target.value });
    }

    handleLike(e) {
        e.preventDefault();

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
        if ((this.props.match.params.artist !== this.props.track.artist) 
        && (this.props.match.params.track !== this.props.track.track)) {
            this.props.fetchTracksByArtist(this.props.match.params.artist)
        }
    }

    handleArt() {
        document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
    }

    render() {
        const {track, updateTrackPlays, comments, fetchTrackComments } = this.props;

        const likeButton = this.props.track.id in this.props.currentUser.likedTracks ?
            (<button
                id="trackshowunlike"
                className="trackshowunlike"
                onClick={this.handleLike}
                >
                <FontAwesomeIcon icon={faHeart} />
                <span className="trackshowlike-text">
                    Liked
                </span>
            </button>) :
            (<button
                id="trackshowlike"
                className="trackshowlike"
                onClick={this.handleLike}
                >
                <FontAwesomeIcon icon={faHeart} />
                <span className="trackshowlike-text">
                    Like
                </span>
            </button>);

        if (track.photoUrl) {
            let photo = new Image();
            photo.src = track.photoUrl;
            photo.onload = () => {
                this.handleArt();
            }
        }


        return (
        <div>
            <div className="show-hero-wrapper">
                <div className="show-hero">
                    <div
                    id="background-gradient"
                    style={{height: "100%"}}>

                    </div>
                    <div className="show-h-fg">
                        <div className="s-h-artwork">
                            <div className="image-placeholder">
                                <span
                                    id="artwork-image-official"
                                    className="artwork-image-official"
                                    ></span>
                            </div>
                        </div>
                        <div className="s-h-title">
                            <div className="s-h-title-container">
                                <div className="shtitle">
                                    <div className="shtitle-play">
                                        <div
                                            className="playbtn"
                                            onClick={() => updateTrackPlays(track)}
                                            style={{ lineHeight: "60px" }}
                                            >
                                            <div 
                                            className="playbtn-arw"
                                            style={{ fontSize: "20px" }}
                                            >
                                                <FontAwesomeIcon icon={faPlay} />
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
                                                    {/* <span>place avatar here w styling</span> */}
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
                                track={track} 
                                fetchTrackComments={fetchTrackComments} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default TrackShow;