import React from 'react';
import { withRouter } from 'react-router-dom';

class Discover extends React.Component {
    constructor(props) {
        super(props);
        // this.updatePlayBar = this.updatePlayBar.bind(this);
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    // updatePlayBar(track) {
    //     return this.props.receiveCurrentTrack(track);
    // }

    render() {
        // const defPhoto = this.props.tracks === [] ? this.props.tracks[0].photoUrl : 'SplashImage.JPG';
        const trackitem = this.props.tracks.map(track => {
            return (
                        
                <li
                key={track.id}
                onClick = {() => this.props.receiveCurrentTrack(track)}
                className="track-discover-main-modular-module-content-tracklist-item">
                    <div className="track-discover-main-modular-module-content-tracklist-item-a">
                        <div className="track-discover-main-modular-module-content-tracklist-item-a1">
                            <span className="track-discover-main-modular-module-content-tracklist-item-a1-artist">
                                {track.artist_id}
                            </span>
                            <span className="track-discover-main-modular-module-content-tracklist-item-a1-title">
                                {track.title} 
                            </span>
                        </div>
                        <div className="track-discover-main-modular-module-content-tracklist-item-a2">
                            <div className="track-discover-main-modular-module-content-tracklist-item-a2-content">
                                {/* numplays */}1000
                            </div>
                        </div>
                    </div>
                </li>
            )
        });

        const trackitemgal = (this.props.tracks.slice(0, 8).map(track => {
            return (
                <div 
                    key={track.id}
                    className="track-discover-main-modular-module-gallery-item"
                    onClick={() => this.props.receiveCurrentTrack(track)}>
                    <div className="splash-main-content1-trendingtracks-tile">
                        <div className="splash-main-content1-trendingtracks-tile-artwork">
                            <div className="splash-main-content1-trendingtracks-tile-artwork-image">
                                <div className="splash-main-content1-trendingtracks-tile-artwork-image-placeholder">
                                    <span
                                        className="splash-main-content1-trendingtracks-tile-artwork-image-official"
                                        style={{ backgroundImage: "url(" + track.photoUrl + ")" }}></span>
                                </div>
                            </div>
                            <button className="splash-main-content1-trendingtracks-tile-playbtn-container">
                            </button>
                        </div>
                        <div className="splash-main-content1-trendingtracks-tile-description">
                            <div className="splash-main-content1-trendingtracks-tile-description1">
                                {track.title}
                            </div>
                            <div className="splash-main-content1-trendingtracks-tile-description2">
                                {track.artist_id}
                            </div>
                        </div>
                    </div>
                </div>
            );
        })

        );

        const gallerystyle = (
            <div className="track-discover-main-modular-module">
                <div className="track-discover-main-modular-module-title">
                    <h2 className="track-discover-main-modular-module-title-header">
                        AudioCloud Weekly
                    </h2>
                    <p className="track-discover-main-modular-module-title-body">
                        All of AudioCloud. Just for you.
                    </p>
                </div>
                <div className="track-discover-main-modular-module-content2">
                    <div className="track-discover-main-modular-module-gallery">
                        <div className="track-discover-main-modular-module-gallery-ctr">
                            <div className="track-discover-main-modular-module-gallery-slider">
                                {trackitemgal}
                            </div>
                        </div>
                    </div>
                    <div className="track-discover-main-modular-module-fwd">

                    </div>
                    <div className="track-discover-main-modular-module-bwd">

                    </div>
                </div>
                <div className="track-discover-main-modular-module-context">
                    <span className="track-discover-main-modular-module-context-body">
                        Based on your listening history
                                    </span>
                </div>
            </div>
        )

        const playliststyle = (
            <ul className="track-discover-main-modular-list">
                {/* below is dynamic */}
                <li className="track-discover-main-modular-item">
                    <div className="track-discover-main-modular-module">
                        <div className="track-discover-main-modular-module-title">
                            <h2 className="track-discover-main-modular-module-title-header">
                                AudioCloud Weekly
                                    </h2>
                            <p className="track-discover-main-modular-module-title-body">
                                All of AudioCloud. Just for you.
                                    </p>
                        </div>
                        <div className="track-discover-main-modular-module-content">
                            <div className="track-discover-main-modular-module-content-gradient">
                                <div className="track-discover-main-modular-module-content-gradient2"></div>
                            </div>
                            <div className="track-discover-main-modular-module-content-artwork">
                                <div className="track-discover-main-modular-module-content-artwork-image">
                                    <div className="track-discover-main-modular-module-content-artwork-image-ph">
                                        <span 
                                        className="track-discover-main-modular-module-content-artwork-image-main"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="track-discover-main-modular-module-content-tracklist">
                                <div className="track-discover-main-modular-module-content-tracklist-area">
                                    <div className="track-discover-main-modular-module-content-tracklist-area2">
                                        <div className="track-discover-main-modular-module-content-tracklist-scrollable">
                                            <ul className="track-discover-main-modular-module-content-tracklist-list">
                                                {trackitem}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="track-discover-main-modular-module-context">
                            <div className="track-discover-main-modular-module-context-icon-container">
                                <div className="track-discover-main-modular-module-context-icon-body">
                                    <div className="track-discover-main-modular-module-context-icon-image">
                                        <div 
                                        className="track-discover-main-modular-module-context-icon-image-content">
                                            {/* image */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="track-discover-main-modular-module-context-body">
                                Based on your listening history
                                    </span>
                        </div>
                    </div>
                </li>
                {/* above is dynamic */}
            </ul>
        )
        return (
        
            <div className="discover-main">
                <div className="track-discover-main-container">
                    {playliststyle}
                    {gallerystyle}
                    {playliststyle}
                    {gallerystyle}
                    {playliststyle}
                    {gallerystyle}
                    {playliststyle}
                    {gallerystyle}
                    {playliststyle}
                    {gallerystyle}
                </div>
                <div className="track-discover-social-container">

                </div>
            </div>

        );
    }
}


export default withRouter(Discover);