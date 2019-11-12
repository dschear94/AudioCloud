import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyle from '../playlist/list_style';
import GalleryStyle from '../playlist/gallery_style';
import SocialSidebarModule from './social_sidebar_module';

class SocialSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.fetchTracksByLikes(this.props.currentUser.id).then(() => this.setState({ loading: false }));
    }

    render() {
        const { likedTracks } = this.props
        console.log(likedTracks)

        const loader = this.state.loading ? (
            <div className="loading-spinner-background"><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></div>
        ) : (
                <div>
                   <SocialSidebarModule module={"likes"} tracks={likedTracks}/>
                   {/* <SocialSidebarModule module={"recentPlays"} /> */}
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