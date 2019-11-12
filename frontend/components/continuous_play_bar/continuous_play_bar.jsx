import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward, faRandom, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { fetchTracks } from '../../actions/track_actions';
import { withRouter } from 'react-router-dom';
import { playTrack, pauseTrack } from '../../actions/play_status_actions'
import { getCurrentTrack } from '../../reducers/selectors'

const msp = state => {
    let currentTrackData = state.entities.currentTrack.data;
    let currentTrackStatus = state.entities.currentTrack.playing;

    return state.entities.currentTrack ? 
        {
            track: currentTrackData,
            trackStatus: currentTrackStatus,
            playStatus: state.ui.playStatus,
        } :  {}
    ;

};

const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
})

class ContinuousPlayBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: "0:00",
            currentTime: "0:00",
            drag: false,
            playing: false
        }

        this.trackPause = this.trackPause.bind(this);
        this.trackPlay = this.trackPlay.bind(this);
        this.handleMetaData = this.handleMetaData.bind(this);
        this.handleCurrentTime = this.handleCurrentTime.bind(this);
        this.handleProgressMouseDown = this.handleProgressMouseDown.bind(this);
        this.handleProgressMouseUp = this.handleProgressMouseUp.bind(this);
        this.handleProgressDrag = this.handleProgressDrag.bind(this);
        this.handleProgressDragStart = this.handleProgressDragStart.bind(this);
        this.handleProgressDragEnd = this.handleProgressDragEnd.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        // if (this.props.track.id !== prevProps.track.id) {
        //     if (prevState.playing) {
        //         document.getElementById("currentTrack").play();
        //         const newState = Object.assign({}, this.state, { playing: true });
        //         this.setState(newState); 
        //     }
        // } else {
        //     if (this.state.playing) {
        //         if (document.getElementById("currentTrack").currentTime !== 0) {
        //             document.getElementById("currentTrack").pause();
        //             const newState = Object.assign({}, this.state, { playing: false });
        //             this.setState(newState); 
        //         }
        //     } else {
        //             // document.getElementById("currentTrack").play();
        //             console.log("yo")
        //     }
        // }        


        // if (this.props.track.id !== prevProps.track.id) {
        //         document.getElementById("currentTrack").play();
        //         const newState = Object.assign({}, this.state, { playing: true });
        //         this.setState(newState); 
        //         console.log(1)
        // } else {
        //     document.getElementById("currentTrack").pause();
        //     const newState = Object.assign({}, this.state, { playing: false });
        //     this.setState(newState); 
        //     console.log(2)
        // }

        // debugger


        // if (this.props.track.id !== prevProps.track.id) {
        //     // document.getElementById("currentTrack").play();
        //     const newState = Object.assign({}, this.state, { 
        //         playing: true,
        //     });
        //     this.setState(newState, () => {
        //         document.getElementById("currentTrack").play();
        //     }); 

        // // } else {
        // //     if (this.props.trackStatus) {
        //         // const newState = Object.assign({}, this.state, {
        //         //     playing: false,
        //         // });
        //         // this.setState(newState, () => {
        //         //     document.getElementById("currentTrack").pause();
        //         // }); 
        // //     } else {

        // //         const newState = Object.assign({}, this.state, {
        // //             playing: true,
        // //         });
        // //         this.setState(newState, () => {
        // //             document.getElementById("currentTrack").play();
        // //         }); 
        // //     }
        // }
        // if (!this.props.trackStatus && this.state.playing) {
        //     const newState = Object.assign({}, this.state, {
        //         playing: false,
        //     });
        //     this.setState(newState, () => {
        //         document.getElementById("currentTrack").pause();
        //     }); 
        // }

        // if (this.props.trackStatus && !this.state.playing) {
        //     const newState = Object.assign({}, this.state, {
        //         playing: true,
        //     });
        //     this.setState(newState, () => {
        //         document.getElementById("currentTrack").play();
        //     }); 
        // }

        if (this.props.playStatus === "playing") {
            document.getElementById("currentTrack").paused ?
            document.getElementById("currentTrack").play() : null;
        } else if (this.props.playStatus === "paused") {
            document.getElementById("currentTrack").paused ? 
            null : document.getElementById("currentTrack").pause();
        } else if (this.props.playStatus === "playing" && this.props.track.id !== prevProps.track.id) {
            document.getElementById("currentTrack").play()
        }

    }

    handleProgressMouseDown(e) {
        const progress = document.getElementById("cpb-timeline-progress-bg").getBoundingClientRect();
        const filler = document.getElementById("cpb-timeline-progress-timepassed");
        const handle = document.getElementById("cpb-timeline-progress-handle");
        const timeshow = document.getElementById("cpb-timeline-timepassed-show");
        const currentTrack = document.getElementById("currentTrack");
        


        let amount;

        if (e.clientX < progress.left) {
            amount = "0%";
        } else if (e.clientX > progress.right) {
            amount = "100%";
        } else {
            amount = (((e.clientX - progress.left) / progress.width) * 100) + "%";
        }


        const time = (currentTrack.duration * parseFloat(amount)) / 100;


        const currentTimeMin = Math.floor((time) / 60);
        const currentTimeSec = (
            Math.floor(time % 60) < 10 ?
                ("0" + Math.floor(time % 60)) : Math.floor(time % 60)
        );
        const currentTimeObj = isNaN(currentTimeMin) ? "0:00" : `${currentTimeMin + ":" + currentTimeSec}`;

        handle.style.left = amount;
        filler.style.width = amount;
        timeshow.innerHTML = currentTimeObj;
        const newState = Object.assign({}, this.state, { drag: true });
        this.setState(newState); 
    }

    handleProgressDragStart(e) {
    }

    handleProgressDrag(e) {
        e.preventDefault();
        
        const progress = document.getElementById("cpb-timeline-progress-bg").getBoundingClientRect();
        const filler = document.getElementById("cpb-timeline-progress-timepassed");
        const handle = document.getElementById("cpb-timeline-progress-handle");
        const timeshow = document.getElementById("cpb-timeline-timepassed-show");
        const currentTrack = document.getElementById("currentTrack");
        


        let amount;

        if (e.clientX < progress.left) {
            amount = "0%";
        } else if (e.clientX > progress.right) {
            amount = "100%";
        } else {
            amount = (((e.clientX - progress.left) / progress.width) * 100) + "%";
        }

        const time = (currentTrack.duration * parseFloat(amount)) / 100;


        const currentTimeMin = Math.floor((time) / 60);
        const currentTimeSec = (
            Math.floor(time % 60) < 10 ?
                ("0" + Math.floor(time % 60)) : Math.floor(time % 60)
        );
        const currentTimeObj = `${currentTimeMin + ":" + currentTimeSec}`;

        if (e.clientX !== 0) {
            handle.style.left = amount;
            filler.style.width = amount;
            timeshow.innerHTML = currentTimeObj;
        }
        const newState = Object.assign({}, this.state, { drag: true });
        this.setState(newState); 
    }

    handleProgressDragEnd(e) {
        const currentTrack = document.getElementById("currentTrack");
        const progress = document.getElementById("cpb-timeline-progress-bg").getBoundingClientRect();
        const filler = document.getElementById("cpb-timeline-progress-timepassed");
        const handle = document.getElementById("cpb-timeline-progress-handle");

        let amount;

        if (e.clientX < progress.left) {
            amount = "0%";
        } else if (e.clientX > progress.right) {
            amount = "100%";
        } else {
            amount = (((e.clientX - progress.left) / progress.width) * 100) + "%";
        }

        currentTrack.currentTime = (parseFloat(amount) * currentTrack.duration) / 100;

            handle.style.left = amount;
            filler.style.width = amount;
    
        const newState = Object.assign({}, this.state, { drag: false });
        this.setState(newState); 
    }

    handleProgressMouseUp(e) {
        const currentTrack = document.getElementById("currentTrack");
        const progress = document.getElementById("cpb-timeline-progress-bg").getBoundingClientRect();
        const filler = document.getElementById("cpb-timeline-progress-timepassed");
        const handle = document.getElementById("cpb-timeline-progress-handle");

        let amount;

        if (e.clientX < progress.left) {
            amount = "0%";
        } else if (e.clientX > progress.right) {
            amount = "100%";
        } else {
            amount = (((e.clientX - progress.left) / progress.width) * 100) + "%";
        }

        currentTrack.currentTime = (parseFloat(amount) * currentTrack.duration) / 100;

        handle.style.left = amount;
        filler.style.width = amount;

        const newState = Object.assign({}, this.state, { drag: false });
        this.setState(newState); 
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
        const currentTrack = document.getElementById("currentTrack");
        const time = currentTrack.currentTime;

        const currentTimeMin = Math.floor(time / 60);
        const currentTimeSec = (
            Math.floor(time % 60) < 10 ? 
            ("0" + Math.floor(time % 60)) : Math.floor(time % 60)
        );
        const currentTimeObj = `${currentTimeMin + ":" + currentTimeSec}`;
        const newState = Object.assign({}, this.state, { currentTime: currentTimeObj });
        
        // this.setState(newState);
        
        const filler = document.getElementById("cpb-timeline-progress-timepassed");
        const handle = document.getElementById("cpb-timeline-progress-handle");
        
        let ctMins = (currentTimeObj.split(":")[0] * 60);
        let ctSecs = currentTimeObj.split(":")[1];
        let numerator = parseInt(ctMins) + parseInt(ctSecs);
        
        let dMins = (this.state.duration.split(":")[0] * 60);
        let dSecs = this.state.duration.split(":")[1];
        let denom = parseInt(dMins) + parseInt(dSecs);
        
        const progress =  ((numerator / denom) * 100) + "%";
        
        const bg = document.getElementById("cpb-timeline-progress");
            
            if (!this.state.drag) {
                handle.style.left = progress;
                filler.style.width = progress;
                document.getElementById("cpb-timeline-timepassed-show").innerHTML = currentTimeObj;
            }
        }
        
    trackPlay(e) {
        e.preventDefault();
        // const newState = Object.assign({}, this.state, { playing: true });
        // this.setState(newState, () => {
        //     document.getElementById("currentTrack").play();
            this.props.playTrack();
            
        // }); 
    }

    trackPause(e) {
        e.preventDefault();
        // document.getElementById("currentTrack").pause();
        // const newState = Object.assign({}, this.state, { playing: false });
        // this.setState(newState, () => {
            this.props.pauseTrack();
        // }); 
    }

    trackSkipfwd(e) {
        e.preventDefault();
    }

    trackSkipbwd(e) {
        e.preventDefault();
    }

    componentDidMount() {
        setInterval(this.handleCurrentTime, 100);
        // const newState = Object.assign({}, this.state, { playing: true });
        // this.setState(newState, () => {
        //     document.getElementById("currentTrack").play();

            this.props.playTrack();
        // }); 
    }

    render() {
        
        const audio = (
        <audio 
        preload="auto" 
        id="currentTrack" 
        src={`${this.props.track.trackUrl}`}
        onLoadedMetadata={this.handleMetaData}
        ></audio>
        );

        const playPause = this.props.playStatus !== "playing" ? (
            <button
                className="cpb-play"
                onClick={this.trackPlay}>
                <FontAwesomeIcon icon={faPlay} />
            </button>
        ) : (
                <button
                    className="cpb-play"
                    onClick={this.trackPause}>
                    <FontAwesomeIcon icon={faPause} />
                </button>
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
                                <FontAwesomeIcon icon={faBackward} />
                            </button>

                            {playPause}

                            <button className="cpb-skip-forward">
                                <FontAwesomeIcon icon={faForward} />
                            </button>
                            <div className="cpb-shuffle">
                                <button className="cpb-shuffle-btn">
                                    <FontAwesomeIcon icon={faRandom} />
                                </button>
                            </div>
                            <div className="cpb-timeline">
                                <div className="cpb-timeline-content">
                                    <div className="cpb-timeline-timepassed">
                                        <span 
                                            id="cpb-timeline-timepassed-show"
                                            className="cpb-timeline-timepassed-show"
                                            >
                                            </span>
                                    </div>
                                        <div id="cpb-timeline-progress"
                                            className="cpb-timeline-progress"
                                            role="progressbar"
                                            >
                                            <div
                                                id="cpb-dummy"
                                                className="cpb-dummy"
                                                onMouseDown={this.handleProgressMouseDown}
                                                draggable="true"
                                                onDrag={this.handleProgressDrag}
                                                onDragStart={this.handleProgressDragStart}
                                                onDragEnd={this.handleProgressDragEnd}
                                                onMouseUp={this.handleProgressMouseUp}
                                                >
                                                    
                                            </div>
                                            <div className="cpb-timeline-progress-bg"
                                                id="cpb-timeline-progress-bg">
                                            </div>
                                            <div
                                                id="cpb-timeline-progress-timepassed"
                                                className="cpb-timeline-progress-timepassed"
                                            >
                                            </div>
                                            <div
                                                id="cpb-timeline-progress-handle"
                                                className="cpb-timeline-progress-handle"
                                            >

                                            </div>
                                            <div
                                                id="cpb-timeline-progress-handle-hidden"
                                                className="cpb-timeline-progress-handle-hidden"
                                            >
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
                                <div className="cpb-volume-wrapper">
                                    <button 
                                    className="cpb-volume-btn"
                                    type="button">

                                        <FontAwesomeIcon icon={faVolumeUp} />
                                    </button>
                                </div>
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