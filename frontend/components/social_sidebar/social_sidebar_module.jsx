import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyle from '../playlist/list_style'
import GalleryStyle from '../playlist/gallery_style'
import SocialSidebarModuleItem from './social_sidebar_module_item'
import { faHistory, faHeart, faChild, faSignOutAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialSidebarModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const { tracks, currentTrackId, trackStatus, moduleType, updateTrackPlays, pauseTrack, playTrack } = this.props;

        const moduleItems = tracks.reverse().slice(0, 3).map(track => {
            return <SocialSidebarModuleItem key={track.id} track={track} updateTrackPlays={updateTrackPlays} pauseTrack={pauseTrack} playTrack={playTrack} moduleType={moduleType} currentTrackId={currentTrackId} trackStatus={trackStatus}/>
        });

        const moduleLink = this.props.moduleType === "likes" ? (
            <Link 
                className="cr-mod-head-text"
                to={"/you/likes"}> 
                 <FontAwesomeIcon icon={faHeart} />
                <div
                    style={{textIndent: "7px"}}
                    >
                    Likes
                </div>
            </Link>
        ) : (
                <Link 
                    to={"/you/history"}
                    className="cr-mod-head-text"
                    >
                    <FontAwesomeIcon icon={faHistory} />
                <div
                    style={{ textIndent: "7px" }}>
                        History
                </div>
                </Link>
        );

        return (
            <div className="content-right-module">
                <div className="cr-module-header">
                    <div >
                        {moduleLink}
                            </div>
                </div>
                <div className="cr-module-content">
                    <ul className="module-content-list">
                        {moduleItems}
                    </ul>
                </div>
            </div>
        );
    }
}


export default withRouter(SocialSidebarModule);