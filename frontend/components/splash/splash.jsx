import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TrackBadgeItem from '../track_item/track_badge_item';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.tracks.length === 0) {
            this.props.fetchTracks();
        }
    }

    render() {
        const { pauseTrack, playTrack, tracks, updateTrackPlays, currentTrackId, trackStatus, createLike, deleteLike, fetchTrack, currentUser } = this.props;
        const trackitems = tracks.slice(0, 12).map(track =>
            <TrackBadgeItem 
            key={track.id} 
            track={track} 
            playTrack={playTrack} 
            trackStatus={trackStatus} 
            currentTrackId={currentTrackId} 
            pauseTrack={pauseTrack} 
            updateTrackPlays={updateTrackPlays}
            currentUser={currentUser}
            createLike={createLike}
            deleteLike={deleteLike}
            fetchTrack={fetchTrack}
            />
        );
        return (
            <div className="splash-main">
                <div className="splash-main-banner">
                    <div className="splash-main-banner-hero">
                        <div className="splash-main-banner-hero-ctnr">
                            <div className="splash-main-banner-hero-carousel">
                                <div className="splash-main-banner-hero-carousel1">
                                    <div className="splash-main-banner-hero-carousel1-title">
                                        Discover more with AudioCloud today
                                    </div>
                                    <p className="splash-main-banner-hero-carousel1-tags">
                                        Upload your first track and begin your journey. AudioCloud gives you space to create, find your fans, and connect with other artists.
                                    </p>
                                </div>
                            </div>
                            <div className="splash-main-banner-hero-carousel-nav">

                            </div>
                            <div className="splash-main-banner-hero-logo">
                                AudioCloud
                            </div>
                            <div className="splash-main-banner-hero-session">
                                <button 
                                    className="splash-main-banner-hero-login-btn"
                                    onClick={() => this.props.openModal('entry')}>
                                    Sign in
                                </button>
                                <button 
                                    className="splash-main-banner-hero-signup-btn"
                                    onClick={() => this.props.openModal('entry')}>
                                    Create account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="splash-main-content1">
                    <div className="splash-main-content1-searchcontainer">
                        <div className="splash-main-content1-search">
                            <form className="splash-main-content1-search-form">
                                <input 
                                    className="splash-main-content1-searchbar" 
                                    type="search"
                                    placeholder="Search bar coming soon"/>
                                <button 
                                    type="submit"
                                    className="splash-main-content1-searchbar-submit">
                                </button>
                            </form>
                        </div>
                         or 
                        <div className="splash-main-content1-uploadbtn" onClick={() => this.props.openModal('entry')}>Upload your own</div>
                    </div>
                    <div className="splash-main-content1-trendingtracks">
                        <div className="splash-main-content1-trendingtracks-title">
                            Hear what’s trending for free in the AudioCloud community
                        </div>
                        <div className="splash-main-content1-trendingtracks-content">
                            <ul className="splash-main-content1-trendingtracks-content-list">
                                {trackitems}
                            </ul>
                        </div>
                        <div className="splash-main-content1-trendingtracks-btncontainer">
                            <div 
                                className="splash-main-content1-trendingtracks-btn"
                                onClick={() => this.props.openModal('entry')}>
                                Explore trending playlists
                            </div>
                        </div>
                    </div>
                </div>
                <div className="splash-main-content2">
                    <div className="splash-main-content2-mobile">
                        <div className="splash-main-content2-mobile-devices">
                            <div className="splash-main-content2-mobile-devices-wrapper">
                                <figure className="splash-main-content2-mobile-devices-figure"></figure>
                            </div>
                        </div>
                        <div className="splash-main-content2-mobile-info">
                            <div className="splash-main-content2-mobile-info-header">
                                Never stop listening
                            </div>
                            <p className="splash-main-content2-mobile-info-text">
                                AudioCloud is available on Web and coming to iOS, Android, Sonos, Chromecast, and Xbox One.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="splash-main-content3">
                    <div className="splash-main-content3-teaser">
                        <div className="splash-main-content3-teaser-wrapper">
                            <div className="splash-main-content3-teaser-title">
                                Calling all creators
                            </div>
                            <p className="splash-main-content3-teaser-text">
                                Get on AudioCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="splash-main-content4">
                    <div className="splash-main-content4-module">
                        <div className="splash-main-content4-module-text">
                            Thanks for listening. Now join in.
                        </div>
                        <p className="splash-main-content4-module-p">
                            Save tracks, follow artists grow your fanbase. All for free.
                        </p>
                        <div className="splash-main-content4-signup">
                            <button 
                                className="splash-main-content4-signup-btn"
                                onClick={() => this.props.openModal('entry')}>
                                Create account
                            </button>
                        </div>
                        <div className="splash-main-content4-login">
                            Already have an account? <button 
                            className="splash-main-content4-login-btn"
                            onClick={() => this.props.openModal('entry')}>Sign in</button>
                        </div>
                    </div>
                </div>
                <div className="splash-main-footer">
                    <div className="splash-main-footer-content">
                        Thanks for coming.
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(Splash);