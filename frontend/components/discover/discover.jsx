import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyle from '../playlist/list_style';
import GalleryStyle from '../playlist/gallery_style';
import SocialSidebarContainer from '../social_sidebar/social_sidebar_container'

class Discover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.fetchTracks().then(() => this.setState({ loading: false }))
        // window.onload = () => this.setState({ loading: false })
    }

    render() {

        const { tracks, currentTrackId, fetchTracks, trackStatus, moduleType, createLike, deleteLike, fetchTrack, currentUser, updateTrackPlays, pauseTrack, playTrack } = this.props;

        const loader = this.state.loading ? (
            <div className="loading-spinner-background"><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></div>
        ) : (
                <div>
                    <ListStyle uni={1} tracks={tracks} fetchTracks={fetchTracks} updateTrackPlays={updateTrackPlays} />
                    <GalleryStyle uni={2} 
                        tracks={tracks} 
                        fetchTracks={fetchTracks} 
                        updateTrackPlays={updateTrackPlays} 
                        trackStatus={trackStatus} 
                        currentTrackId={currentTrackId}
                        playTrack={playTrack}
                        pauseTrack={pauseTrack}
                        currentUser={currentUser}
                        createLike={createLike}
                        currentUser={currentUser}
                        deleteLike={deleteLike}
                        fetchTrack={fetchTrack}
                    />
                    {/* <ListStyle uni={3} tracks={tracks} fetchTracks={fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <GalleryStyle uni={4} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <ListStyle uni={5} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <GalleryStyle uni={6} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <ListStyle uni={7} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <GalleryStyle uni={8} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <ListStyle uni={9} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <GalleryStyle uni={10} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} /> */}
                </div>
        );

        return (
                <div className="content-left-container">
                    {loader}
                </div>
        );
    }
}


export default withRouter(Discover);