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

        if (this.props.track.id in this.props.likedTracks) {
            let likedTrackId = this.props.likedTracks[this.props.track.id].id;
            this.props.deleteLikedTrack(likedTrackId)
        } else {
            const likedTrack = Object.assign({
                user_id: this.props.author_id,
                track_id: this.props.track.id
            })

            this.props.createLikedTrack(likedTrack);
        }

    }

    handleCommentSubmit(e) {
        if (e.charCode === 13) {
            if (this.state.comment.length < 1000) {
                const comment = Object.assign({
                    track_id: this.props.track.id,
                    body: this.state.comment,
                    author_id: this.props.author_id
                })
                
                this.props.createComment(comment);
                document.getElementById('commentinput').value = '';
            } else {
                // render errors
            }
        }
    }

    componentDidMount() {
        // const that = this;
        if ((this.props.match.params.artist !== this.props.track.artist) 
            && (this.props.match.params.track !== this.props.track.track)) {
            this.props.fetchArtist(this.props.match.params.artist)
                .then(() => {
                    const artwork = document.getElementById("artwork-image-official");
                    artwork.style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
                })
                // .then(this.handleArt());
        } else {
            const artwork = document.getElementById("artwork-image-official");
            artwork.style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
        }



        // document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
    }

    handleArt(photo) {
        const bg = document.getElementById("background-gradient");
        const colorthief = new ColorThief();
        const paletteArray = colorthief.getPalette(photo, 2);
        bg.style.backgroundImage = `linear-gradient(135deg, rgb(${paletteArray[0]}) 0%, rgb(${paletteArray[1]}) 100%);`
    }

    componentDidUpdate(prevProps) {
        if (this.props.track.id !== prevProps.track.id){
            document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
            if (this.props.track.photoUrl) {
                let photo = new Image();
                // photo.src = "https://audiocloud-ds-dev.s3.us-east-2.amazonaws.com/33TAVfzZHXZWtBnVFy2SWScp?response-content-disposition=inline%3B%20filename%3D%22IMG_5373.jpg%22%3B%20filename%2A%3DUTF-8%27%27IMG_5373.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNSXGHH7Y3CQLXNL%2F20191030%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20191030T181103Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2e77c6b1d4c4f7ec0c8bcbfb3113b446ca70b4f335b00c2def7c0a3ec0d17ab7";
                photo.src = this.props.track.photoUrl;
                photo.crossOrigin = "anonymous";
                photo.onload = () => {
                    const that = photo;
                    // this.handleArt(that);

                }
            }
        } else {
            document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
        }
    }

    componentWillUnmount() {
        // this.props.clearLikes();
    }

    render() {
        const {track, sendTrack, comments, fetchTrackComments } = this.props;

        const likeButton = this.props.track.id in this.props.likedTracks ?
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
                                            onClick={() => sendTrack(track)}
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