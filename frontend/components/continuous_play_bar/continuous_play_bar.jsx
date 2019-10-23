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
            currentTime: "0:00",
            drag: false 
        }
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
        this.handleProgressMouseDown = this.handleProgressMouseDown.bind(this);
        // this.handleProgressMouseMove = this.handleProgressMouseMove.bind(this);
        this.handleProgressMouseUp = this.handleProgressMouseUp.bind(this);
        this.handleProgressDrag = this.handleProgressDrag.bind(this);
        this.handleProgressDragStart = this.handleProgressDragStart.bind(this);
        this.handleProgressDragEnd = this.handleProgressDragEnd.bind(this);
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

        // debugger

        const time = (currentTrack.duration * parseFloat(amount)) / 100;


        const currentTimeMin = Math.floor((time) / 60);
        const currentTimeSec = (
            Math.floor(time % 60) < 10 ?
                ("0" + Math.floor(time % 60)) : Math.floor(time % 60)
        );
        const currentTimeObj = `${currentTimeMin + ":" + currentTimeSec}`;

        handle.style.left = amount;
        filler.style.width = amount;
        timeshow.innerHTML = currentTimeObj;
        const newState = Object.assign({}, this.state, { drag: true });
        this.setState(newState); 
        // const newState = Object.assign({}, this.state, { drag: true });
        // this.setState(newState);
    }

    handleProgressDragStart(e) {
        debugger
        // document.body.style.cursor = 'grabbing';
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

        // debugger

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
        // const newState = Object.assign({}, this.state, { drag: true });
        // this.setState(newState);
    }

    // handleProgressMouseMove(e) {
        
    //     debugger
    //     if (this.state.drag) {
    //         const progress = document.getElementById("cpb-timeline-progress-bg").getBoundingClientRect();
    //         const filler = document.getElementById("cpb-timeline-progress-timepassed");
    //         const handle = document.getElementById("cpb-timeline-progress-handle");
    //         const timeshow = document.getElementById("cpb-timeline-timepassed-show");
    //         const currentTrack = document.getElementById("currentTrack");
            


    //         let amount;
    //         console.log(e.clientX);
    //         console.log(progress.left);

    //         if (e.clientX < progress.left) {
    //             amount = "0%";
    //         } else if (e.clientX > progress.right) {
    //             amount = "100%";
    //         } else {
    //             amount = (((e.clientX - progress.left) / progress.width) * 100) + "%";
    //         }

    //         // debugger

    //         const time = (currentTrack.duration * parseFloat(amount)) / 100;


    //         const currentTimeMin = Math.floor((time) / 60);
    //         const currentTimeSec = (
    //             Math.floor(time % 60) < 10 ?
    //                 ("0" + Math.floor(time % 60)) : Math.floor(time % 60)
    //         );
    //         const currentTimeObj = `${currentTimeMin + ":" + currentTimeSec}`;

    //         handle.style.left = amount;
    //         filler.style.width = amount;
    //         timeshow.innerHTML = currentTimeObj;
    //     }
    //     // const newState = Object.assign({}, this.state, { drag: true });
    //     // this.setState(newState); 
    //     // const newState = Object.assign({}, this.state, { drag: true });
    //     // this.setState(newState);
    // }

    // handleProgressDrag(e) {
    //     e.preventDefault();
    //     const progress = document.getElementById("cpb-timeline-progress-bg").getBoundingClientRect();
    //     const filler = document.getElementById("cpb-timeline-progress-timepassed");
    //     const handle = document.getElementById("cpb-timeline-progress-handle");

    //     let amount;

    //     if (e.clientX < progress.left) {
    //         amount = "0%";
    //     } else if (e.clientX > progress.right) {
    //         amount = "100%";
    //     } else {
    //         amount = (((e.clientX - progress.left) / progress.width) * 100) + "%";
    //     }

    //     handle.style.left = amount;
    //     filler.style.width = amount;
    // }

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
        // this.state.drag = false;
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

        // const newState = Object.assign({}, this.state, { drag: false });
        // this.setState(newState); 
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
        // e.preventDefault();

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
        
        // if (!this.state.drag) {
            //     handle.style.left = progress;
            //     filler.style.width = progress;
            // }
            
            if (!this.state.drag) {
                handle.style.left = progress;
                filler.style.width = progress;
                document.getElementById("cpb-timeline-timepassed-show").innerHTML = currentTimeObj;
            }
        }
        
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
        setInterval(this.handleCurrentTime, 500);
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
        // onTimeUpdate={this.handleCurrentTime}
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

        // const progress = () => {
        //     let ctMins = (this.state.currentTime.split(":")[0] * 60);
        //     let ctSecs = this.state.currentTime.split(":")[1];
        //     let numerator = parseInt(ctMins) + parseInt(ctSecs);

        //     let dMins = (this.state.duration.split(":")[0] * 60);
        //     let dSecs = this.state.duration.split(":")[1];
        //     let denom = parseInt(dMins) + parseInt(dSecs);

        //     return ((numerator / denom) * 100 ) + "%";
        // };

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
                                            id="cpb-timeline-timepassed-show"
                                            className="cpb-timeline-timepassed-show"
                                            >
                                            {/* {this.state.currentTime} */}
                                            </span>
                                    </div>
                                        <div id="cpb-timeline-progress"
                                            className="cpb-timeline-progress"
                                            role="progressbar"
                                            // onMouseDown={this.handleProgressMouseDown}
                                            // draggable="true"
                                            // onDrag={this.handleProgressDrag}
                                            // onDragEnd={this.handleProgressDragEnd}
                                            >
                                            <div
                                                id="cpb-dummy"
                                                className="cpb-dummy"
                                                onMouseDown={this.handleProgressMouseDown}
                                                // onMouseMove={this.handleProgressMouseMove}
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
                                            // style={{ width: `${document.getElementById("cpb-timeline-progress-handle-hidden").style.left}` }}
                                            >
                                            </div>
                                            <div
                                                id="cpb-timeline-progress-handle"
                                                className="cpb-timeline-progress-handle"
                                            // onDrag={this.handleProgressDrag}
                                            // onDragEnd={this.handleProgressDragEnd}
                                            // draggable="true"
                                            // style={{ left: `${document.getElementById("cpb-timeline-progress-handle-hidden").style.left}` }}> 
                                            >

                                            </div>
                                            <div
                                                id="cpb-timeline-progress-handle-hidden"
                                                className="cpb-timeline-progress-handle-hidden"
                                            // style={{ left: `${progress()}` }}
                                            // draggable="true">
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