import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        const trackitems = this.props.tracks.slice(0, 12).map(track => {
        return (
        <li
        key={track.id}
        onClick={() => this.props.receiveCurrentTrack(track)}
        className="splash-main-content1-trendingtracks-content-item">
            <div className="splash-main-content1-trendingtracks-tile">
                <div className="splash-main-content1-trendingtracks-tile-artwork">
                    <div className="splash-main-content1-trendingtracks-tile-artwork-image">
                        <div className="image-placeholder">
                            <span
                                className="artwork-image-official"
                                style={{ backgroundImage: "url(" + track.photoUrl + ")" }}></span>
                        </div>
                    </div>
                    <button className="splash-main-content1-trendingtracks-tile-playbtn-container">
                    </button>
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
        </li>
        )
    });
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
                        {this.props.currentUser ?
                            <Link className="splash-main-content1-uploadbtn" to="/upload">Upload your own</Link>
                            : <div className="splash-main-content1-uploadbtn" onClick={() => this.props.openModal('entry')}>Upload your own</div>}
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
                            <Link 
                                className="splash-main-content1-trendingtracks-btn"
                                to="/discover">
                                Explore trending playlists
                            </Link>
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
                                AudioCloud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.
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
                            Save tracks, follow artists and build playlists. All for free.
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
                        A bunch of legal links
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(Splash);