import React from 'react';
import { Link } from 'react-router-dom';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { relativeTime } from '../../util/time_util';


// import ColorThief from '../../../node_modules/colorthief/dist/color-thief.umd';
import ColorThief from 'colorthief';

// const colorThief = new ColorThief();
// const ColorThief = require('colorthief');
// const ColorThief = require('../../../node_modules/colorthief');

// import ColorThief from './node_modules/colorthief/dist/color-thief.mjs'






class TrackShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleArt = this.handleArt.bind(this);
    }

    componentDidMount() {
        // const that = this;
        if ((this.props.match.params.artist !== this.props.track.artist) 
            && (this.props.match.params.track !== this.props.track.track)) {
            this.props.fetchArtist(this.props.match.params.artist)
                .then(() => {
                    const artwork = document.getElementById("artwork-image-official");
                    artwork.style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
                })
                // .then(this.handleArt());
        }

        // document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
    }

    handleArt(photo) {
        const bg = document.getElementById("background-gradient");
        const colorthief = new ColorThief();
        debugger
        const paletteArray = colorthief.getPalette(photo, 2);
        bg.style.backgroundImage = `linear-gradient(135deg, rgb(${paletteArray[0]}) 0%, rgb(${paletteArray[1]}) 100%);`
    }

    componentDidUpdate(prevProps) {
        if (this.props.track.id !== prevProps.track.id){
            document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
            if (this.props.track.photoUrl) {
                let photo = new Image();
                debugger
                photo.src = this.props.track.photoUrl;
                photo.crossOrigin = "anonymous";
                photo.onload = () => {
                    const that = photo;
                    this.handleArt(that);
                }
            }
        }
    }

    render() {
        const {track, sendTrack} = this.props;

        return (
        <div>
            <div className="show-hero-wrapper">
                <div className="show-hero">
                    <div
                    id="background-gradient"
                    style={{height: "100%"}}>

                    </div>
                    <div className="show-h-fg">
                        <div className="s-h-artwork">
                            <div className="image-placeholder">
                                <span
                                    id="artwork-image-official"
                                    className="artwork-image-official"
                                    // onLoad={this.handleArt}
                                    ></span>
                            </div>
                        </div>
                        <div className="s-h-title">
                            <div className="s-h-title-container">
                                <div className="shtitle">
                                    <div className="shtitle-play">
                                        <div
                                            className="playbtn"
                                            onClick={() => sendTrack(track)}
                                            style={{ lineHeight: "60px" }}
                                            >
                                            <div 
                                            className="playbtn-arw"
                                            style={{ fontSize: "20px" }}
                                            >
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shtitle-username">
                                        <div className="shtitle-username-container">
                                            <Link 
                                            to={`/${track.artist}`}
                                            className="shtu-text"
                                            >{track.artist}</Link>
                                        </div>
                                        <div className="shtitle-title">
                                            <span
                                                >{track.title}</span>
                                        </div>
                                    </div>
                                    <div className="shtitle-addtl">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-h-info">
                            <div className="shtime">
                                <span>{relativeTime(track.created_at)}</span>
                            </div>
                        </div>
                        <div className="s-h-player">

                        </div>
                    </div>
                </div>
            </div>
            <div className="show-content-wrapper">
                <div className="show-content">

                </div>
            </div>
        </div>
        )
    }
}

export default TrackShow;