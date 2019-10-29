import React from 'react';
import { Link } from 'react-router-dom';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { relativeTime } from '../../util/time_util';

// const ColorThief = require('colorthief');
// const ColorThief = require('../../../node_modules/colorthief');

// import ColorThief from './node_modules/colorthief/dist/color-thief.mjs'






class TrackShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if ((this.props.match.params.artist !== this.props.track.artist) 
            && (this.props.match.params.track !== this.props.track.track)) {
            this.props.fetchArtist(this.props.match.params.artist)
                .then(() => {
                    document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
                });
        }
        document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
        


        // const image = document.getElementById("background-gradient");
        // const colorthief = new ColorThief();

        // debugger

        // const paletteArray = colorthief.getPalette(this.props.track.photoUrl, 2);

        // debugger

        // image.style.backgroundImage = "linear-gradient(135deg, rgb(150, 104, 90) 0%, rgb(45, 47, 47) 100%);"
    }

    componentDidUpdate(prevProps) {
        if (this.props.track.id !== prevProps.track.id){
            document.getElementById("artwork-image-official").style.backgroundImage = "url(" + this.props.track.photoUrl + ")"
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