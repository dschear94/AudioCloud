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
        // if (Object.keys(this.props.currentUser).length !== 0) {
            this.props.fetchTracksByLikes(this.props.currentUser.id).then(() => this.setState({ loading: false }));
        // }
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.currentUser.id !== prevProps.currentUser.id) {
    //         this.props.fetchTracksByLikes(this.props.currentUser.id).then(() => this.setState({ loading: false }));
    //     }
    // }

    render() {
        const { likedTracks, recentPlays, currentTrackId, trackStatus, updateTrackPlays, pauseTrack, playTrack } = this.props;

        const loader = this.state.loading ? (
            <div className="loading-spinner-background"><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></div>
        ) : (
                <div>
                    <SocialSidebarModule moduleType={"likes"} tracks={likedTracks} updateTrackPlays={updateTrackPlays} pauseTrack={pauseTrack} playTrack={playTrack} currentTrackId={currentTrackId} trackStatus={trackStatus}/>
                    <SocialSidebarModule moduleType={"recentPlays"} tracks={recentPlays} updateTrackPlays={updateTrackPlays} pauseTrack={pauseTrack} playTrack={playTrack} currentTrackId={currentTrackId} trackStatus={trackStatus} />
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