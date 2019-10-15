import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
    if (state.entities.currentTrack) {
        return { 
            track: state.entities.currentTrack,
            duration: 0,
            playing: false,
            currentTime: 0 }
    } else {
        return {}
    }
};

const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
})

class ContinuousPlayBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
        this.trackPause = this.trackPause.bind(this);
        this.trackPlay = this.trackPlay.bind(this);
        this.handleMetaData = this.handleMetaData.bind(this);
        this.handleCurrentTime = this.handleCurrentTime.bind(this);
        // this.handleProgressBar = this.handleProgressBar.bind(this);
    }

    trackPause(e) {
        e.preventDefault();
        document.getElementById("currentTrack").pause();
    }

    handleMetaData(e) {
        e.preventDefault();
        const modDurationMin = Math.floor(document.getElementById("currentTrack").duration / 60);
        const modDurationSec = (
            Math.floor(document.getElementById("currentTrack").duration % 60) < 10 ?
                ("0" + Math.floor(document.getElementById("currentTrack").duration % 60)) : Math.floor(document.getElementById("currentTrack").duration % 60)
        )
        const modDuration = `${modDurationMin + ":" + modDurationSec}`
        const newState = Object.assign({}, this.state, {duration: modDuration} );
        this.setState(newState);
    }

    handleCurrentTime(e) {
        e.preventDefault();
        const currentTimeMin = Math.floor(document.getElementById("currentTrack").currentTime / 60);
        const currentTimeSec = (
            Math.floor(document.getElementById("currentTrack").currentTime % 60) < 10 ? 
            ("0" + Math.floor(document.getElementById("currentTrack").currentTime % 60)) : Math.floor(document.getElementById("currentTrack").currentTime % 60)
        )
        const currentTimeObj = `${currentTimeMin + ":" + currentTimeSec}`
        const newState = Object.assign({}, this.state, { currentTime: currentTimeObj });
        

        this.setState(newState);
    }

    // handleProgressBar(e) {
    //     e.preventDefault();
    //     document.getElementById("cpb-timeline-progress-timepassed").style.width=`${this.state.currentTime / this.state.duration}`;
    //     // debugger
    // }

    trackPlay(e) {
        e.preventDefault();
        document.getElementById("currentTrack").play();
    }

    trackSkipfwd(e) {
        e.preventDefault();
    }

    trackSkipbwd(e) {
        e.preventDefault();
    }

    componentDidMount() {
        document.getElementById("currentTrack").play();
    }

    render() {
        const audio = (
        <audio 
        preload="auto" 
        id="currentTrack" 
        src={`${this.props.track.trackUrl}`}
        onLoadedMetadata={this.handleMetaData}
        onTimeUpdate={this.handleCurrentTime}
        // onTimeUpdate={this.handleProgressBar}
        ></audio>
        );
        return (
            <div className="cpb">
                {audio}
                <div className="cpb-content-info">
                    <div className="cpb-content-info-wrapper">
                        <div className="cpb-content-queue">

                        </div>
                        <div className="cpb-content-bg">

                        </div>
                        <div className="cpb-content-elements">
                            <button className="cpb-skip-back">
                                skip back
                            </button>
                            <button 
                                className="cpb-play"
                                onClick={this.trackPlay}>
                                play
                            </button>
                            <button 
                                className="cpb-play"
                                onClick={this.trackPause}>
                                pause
                            </button>
                            <button className="cpb-skip-forward">
                                skip
                            </button>
                            <div className="cpb-shuffle">
                                <button className="cpb-shuffle-btn">
                                    shuffle
                                </button>
                            </div>
                            <div className="cpb-repeat">
                                <button className="cpb-repeat-btn">
                                    repeat
                                </button>
                            </div>
                            <div className="cpb-timeline">
                                <div className="cpb-timeline-content">
                                    <div className="cpb-timeline-timepassed">
                                        <span 
                                            className="cpb-timeline-timepassed-show"
                                            >{this.state.currentTime}</span>
                                    </div>
                                    <div className="cpb-timeline-progress">
                                        <div className="cpb-timeline-progress-bg">
                                        </div>
                                        <div
                                            id="cpb-timeline-progress-timepassed" 
                                            className="cpb-timeline-progress-timepassed"
                                            // style={{ left: `${this.state.currentTime / this.state.duration}` }}
                                            >
                                        </div>
                                        <div 
                                            className="cpb-timeline-progress-handle"
                                            style={{ width: `${this.state.currentTime / this.state.duration}` }}>
                                        </div>
                                    </div>
                                    <div className="cpb-timeline-duration">
                                        <span
                                            className="cpb-timeline-duration-show">
                                            {this.state.duration}
                                        </span>
                                    </div>
                                    <div className="cpb-timeline-snippet">

                                    </div>
                                </div>
                            </div>
                            <div className="cpb-castcontrol">

                            </div>
                            <div className="cpb-volume">

                            </div>
                            <div className="cpb-sound">

                            </div>
                        </div>
                    </div>
                </div>
        </div >

        );
    }
}


export default withRouter(connect(msp, mdp)(ContinuousPlayBar));