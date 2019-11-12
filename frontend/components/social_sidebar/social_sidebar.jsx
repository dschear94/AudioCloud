import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyle from '../playlist/list_style'
import GalleryStyle from '../playlist/gallery_style'

class SocialSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
        debugger
    }

    componentDidMount() {
        this.props.fetchTracks().then(() => this.setState({ loading: false }));
    }

    render() {

        const loader = this.state.loading ? (
            <div className="loading-spinner-background"><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></div>
        ) : (
                <div>
                   <div className="content-right-module">
                       <div className="cr-module-header">
                            <div className="cr-mod-head-text">
                                likes
                            </div>
                        </div>
                       <div className="cr-module-content">
                           <ul className="module-content-list">
                               <li className="mcli">
                                   <div className="soundbadge-small">
                                       <div className="sb-art">

                                       </div>
                                       <div className="sb-content">
                                           <div className="sb-content-info">
                                                <div className="sb-content-title-ctnr">
                                                    <div className="sbc-title-artist">

                                                    </div>
                                                    <div className="sbc-title-title">

                                                    </div>
                                               </div>
                                           </div>
                                           <ul className="sb-content-stats">
                                               <li className="sb-stat-item">
                                                   <div className="sb-stat">
                                                       {/* playcount */}
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
                           </ul>
                       </div>
                   </div>
                    <div className="content-right-module">

                   </div>
                </div>
            );

        return (
            <div className="content-right-container">
                {loader}
            </div>
        );
    }
}


export default withRouter(SocialSidebar);