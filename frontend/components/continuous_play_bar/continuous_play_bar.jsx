import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
    if (state.entities.currentTrack) {
        return { 
            track: state.entities.currentTrack,
            duration: "0:00",
            playing: false,
            currentTime: "0:00" }
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
        this.handleProgressMD = this.handleProgressMD.bind(this);
        }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            if (prevState.playing) {
                document.getElementById("currentTrack").play();
                const newState = Object.assign({}, this.state, { playing: true });
                this.setState(newState); 
            }
        }
    }

    handleProgressMD(e) {
        debugger
        e.preventDefault();
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
        const newState = Object.assign({}, this.state, { playing: true });
        this.setState(newState);   
    }

    trackPause(e) {
        e.preventDefault();
        document.getElementById("currentTrack").pause();
        const newState = Object.assign({}, this.state, { playing: false });
        this.setState(newState);   
    }

    trackSkipfwd(e) {
        e.preventDefault();
    }

    trackSkipbwd(e) {
        e.preventDefault();
    }

    componentDidMount() {
        document.getElementById("currentTrack").play();
        const newState = Object.assign({}, this.state, { playing: true });
        this.setState(newState);        
    }

    render() {
        const audio = (
        <audio 
        preload="auto" 
        id="currentTrack" 
        src={`${this.props.track.trackUrl}`}
        onLoadedMetadata={this.handleMetaData}
        onTimeUpdate={this.handleCurrentTime}
        ></audio>
        );

        const playPause = !this.state.playing ? (
            <button
                className="cpb-play"
                onClick={this.trackPlay}>
                play
            </button>
        ) : (
                <button
                    className="cpb-play"
                    onClick={this.trackPause}>
                    pause
                </button>
        );

        const progress = () => {
            debugger
            let ctMins = (this.state.currentTime.split(":")[0] * 60);
            let ctSecs = this.state.currentTime.split(":")[1];
            let numerator = parseInt(ctMins) + parseInt(ctSecs);

            let dMins = (this.state.duration.split(":")[0] * 60);
            let dSecs = this.state.duration.split(":")[1];
            let denom = parseInt(dMins) + parseInt(dSecs);

            return ((numerator / denom) * 100 ) + "%";
        };

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

                            {playPause}

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
                                    <div className="cpb-timeline-progress"
                                        onMouseDown={this.handleProgressMD}>
                                        <div className="cpb-timeline-progress-bg">
                                        </div>
                                        <div
                                            id="cpb-timeline-progress-timepassed" 
                                            className="cpb-timeline-progress-timepassed"
                                            style={{ width: `${progress()}` }}
                                            >
                                        </div>
                                        <div 
                                            className="cpb-timeline-progress-handle"
                                            style={{ left: `${progress()}` }}
                                            draggable="true">
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