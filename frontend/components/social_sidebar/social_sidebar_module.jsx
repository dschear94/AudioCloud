import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyle from '../playlist/list_style'
import GalleryStyle from '../playlist/gallery_style'
import SocialSidebarModuleItem from './social_sidebar_module_item'

class SocialSidebarModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const {tracks} = this.props;

        const moduleItems = tracks.slice(0, 3).map(track => {
            return <SocialSidebarModuleItem key={track.id} track={track} />
        });

        return (
            <div className="content-right-module">
                <div className="cr-module-header">
                    <div className="cr-mod-head-text">
                        {this.props.module}
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