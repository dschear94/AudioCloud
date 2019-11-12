import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyle from '../playlist/list_style'
import GalleryStyle from '../playlist/gallery_style'

class SocialSidebarModuleItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { track } = this.props;
        debugger

        return (
            <li className="mcli">
                <div className="soundbadge-small">
                    <div className="sb-art">

                    </div>
                    <div className="sb-content">
                        <div className="sb-content-info">
                            <div className="sb-content-title-ctnr">
                                <div className="sbc-title-artist">
                                    {track.artist}
                                </div>
                                <div className="sbc-title-title">
                                    {track.title}
                                </div>
                            </div>
                        </div>
                        <ul className="sb-content-stats">
                            <li className="sb-stat-item">
                                <div className="sb-stat">
                                    {/* {track.playcount} */}
                                </div>
                            </li>
                            <li className="sb-stat-item">
                                <div className="sb-stat">
                                    {/* link to likes */}
                                </div>
                            </li>
                            <li className="sb-stat-item">
                                <div className="sb-stat">
                                    {/* link to show [comments] */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        );
    }
}


export default withRouter(SocialSidebarModuleItem);