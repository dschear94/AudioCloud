import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyle from '../playlist/list_style';
import GalleryStyle from '../playlist/gallery_style';
import { faPlay, faPause, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Artwork from '../artwork/artwork'

class SocialSidebarModuleItem extends React.Component {
    constructor(props) {
        super(props);

        this.togglePlay = this.togglePlay.bind(this);
        this.showControls = this.showControls.bind(this);
        this.hideControls = this.hideControls.bind(this);

    }

    showControls() {
        document.getElementById(`${this.props.moduleType} tile-playbtn-container${this.props.track.id}`).style.opacity = "1"
        document.getElementById(`${this.props.moduleType} tile-playbtn-container${this.props.track.id}`).style.visibility = "visible"
    }

    hideControls() {
        document.getElementById(`${this.props.moduleType} tile-playbtn-container${this.props.track.id}`).style.opacity = "0"
        document.getElementById(`${this.props.moduleType} tile-playbtn-container${this.props.track.id}`).style.visibility = "hidden"
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

    render() {
        const { track, currentTrackId, trackStatus, moduleType } = this.props;
        const playPause = (currentTrackId === track.id && trackStatus === "playing") ?
            <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />; 

        return (
            <li className="mcli">
                <div className="soundbadge-small">
                    <div 
                    className="sb-art"
                        onMouseEnter={this.showControls}
                        onMouseLeave={this.hideControls}
                    >
                        <Artwork track={track}/>
                        <div
                            id={`${moduleType} tile-playbtn-container${track.id}`}
                            className="tile-playbtn-container">
                            <button
                                className="shtitle-play"
                                style={{ height: "100%", width: "100%" }}
                            // style={{ opacity: "0", visibility: "hidden" }}
                            >
                                <div
                                    className="playbtn"
                                    onClick={this.togglePlay}
                                    style={{ lineHeight: "18px", zIndex: "101" }}
                                >
                                    <div
                                        className="playbtn-arw"
                                        style={{ fontSize: "7px" }}
                                    >
                                        {playPause}
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="sb-content">
                        <div className="sb-content-info">
                            <div className="sb-content-title-ctnr">
                                <div className="sb-content-title-ctnr2">
                                    <div className="sbc-title-artist">
                                        <Link to={`/${track.artist}`}>{track.artist}</Link>
                                    </div>
                                    <div className="sbc-title-title">
                                        <Link to={{
                                            pathname: `/${track.artist}/${track.title}`,
                                            state: {
                                                track
                                            }
                                        }}>{track.title}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="sb-content-stats">
                            <li 
                            className="sb-stat-item">
                                    <FontAwesomeIcon icon={faPlay}/>
                                <div 
                                style={{textIndent: "5px"}}
                                className="sb-stat"
                                >
                                    {track.play_count}
                                </div>
                            </li>
                            <li className="sb-stat-item">
                                <FontAwesomeIcon icon={faHeart} />
                                <div 
                                style={{ textIndent: "5px" }}
                                className="sb-stat">
                                    {track.numLikes}
                                </div>
                            </li>
                            <li className="sb-stat-item">
                                 <Link to={{
                                        pathname: `/${track.artist}/${track.title}`,
                                        state: {
                                            track
                                        }}}>                                
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
            </li>
        );
    }
}


export default withRouter(SocialSidebarModuleItem);