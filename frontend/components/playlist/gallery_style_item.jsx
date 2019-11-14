import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faHeart, faPause } from '@fortawesome/free-solid-svg-icons';
import Artwork from '../artwork/artwork';

class GalleryStyleItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true
        }
        
        // this.handleArt = this.handleArt.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.showControls = this.showControls.bind(this);
        this.hideControls = this.hideControls.bind(this);
        this.handleLike = this.handleLike.bind(this);

    }

    // handleArt() {
    //     if (document.getElementById(`artwork-image${this.props.uni}`)) {
    //         document.getElementById(`artwork-image${this.props.uni}`).style.backgroundImage = ("url(" + this.props.track.photoUrl + ")");
    //     }
    // }

    showControls() {

        if (Object.keys(this.props.currentUser).length !== 0) {
            document.getElementById(`${this.props.moduleType}badge-like-container${this.props.track.id}`).style.opacity = "1"
            document.getElementById(`${this.props.moduleType}badge-like-container${this.props.track.id}`).style.visibility = "visible"
        }

        document.getElementById(`tile-playbtn-container${this.props.track.id}`).style.opacity = "1"
        document.getElementById(`tile-playbtn-container${this.props.track.id}`).style.visibility = "visible"
    }

    hideControls() {

        if (Object.keys(this.props.currentUser).length !== 0) {
            document.getElementById(`${this.props.moduleType}badge-like-container${this.props.track.id}`).style.opacity = "0"
            document.getElementById(`${this.props.moduleType}badge-like-container${this.props.track.id}`).style.visibility = "hidden"
        }
        document.getElementById(`tile-playbtn-container${this.props.track.id}`).style.opacity = "0"
        document.getElementById(`tile-playbtn-container${this.props.track.id}`).style.visibility = "hidden"
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
                this.props.deleteLike(like).then(() => this.props.fetchTrack(this.props.track.id))
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


    render() {


        const { uni, track, currentTrackId, currentUser, trackStatus } = this.props;
        const playPause = (currentTrackId === track.id && trackStatus === "playing") ?
            <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />; 

        const likeButton = currentUser.likedTracks ?
            (track.id in currentUser.likedTracks ?
                (<button
                    id="trackshowunlike"
                    style={{ height: "20px", lineHeight: "16px", fontSize: "11px", float: "right" }}
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
                    style={{ height: "20px", lineHeight: "16px", fontSize: "11px", float: "right" }}
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
                style={{ height: "20px", lineHeight: "16px", fontSize: "11px", float: "right" }}
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

                <div
                    key={track.id}
                    className="track-discover-main-modular-module-gallery-item"
                    
                    >
                    <div className="splash-main-content1-trendingtracks-tile">
                        <div 
                            className="splash-main-content1-trendingtracks-tile-artwork"
                            onMouseEnter={this.showControls}
                            onMouseLeave={this.hideControls}
                            >
                            <div className="splash-main-content1-trendingtracks-tile-artwork-image">
                                <div className="image-placeholder">
                                    {/* <span
                                        id={`artwork-image${uni}`}
                                        className="artwork-image"
                                        >
                                        </span> */}
                                        <Artwork track={track}/>
                                </div>
                            </div>
                            <div
                                id={`tile-playbtn-container${track.id}`}
                                className="tile-playbtn-container">
                                <button
                                    className="shtitle-play"
                                // style={{ opacity: "0", visibility: "hidden" }}
                                >
                                    <div
                                        className="playbtn"
                                        onClick={this.togglePlay}
                                        style={{ lineHeight: "60px", zIndex: "101" }}
                                    >
                                        <div
                                            className="playbtn-arw"
                                            style={{ fontSize: "20px" }}
                                        >
                                            {playPause}
                                        </div>
                                    </div>
                                </button>

                            </div>
                            <div
                                id={`${this.props.moduleType}badge-like-container${this.props.track.id}`}
                                className="badge-like-container">

                                {likeButton}
                            </div>
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
                </div>
            );        
    }
}


export default withRouter(GalleryStyleItem);