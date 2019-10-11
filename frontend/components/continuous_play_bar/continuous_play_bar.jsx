import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
    return {track: state.entities.currentTrack || {}}
};

const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
})

class ContinuousPlayBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            track: new Audio(this.props.track.trackUrl),
            playing: true
        }   
        this.trackPause = this.trackPause.bind(this);
        this.trackPlay = this.trackPlay.bind(this);
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.track.id !== nextProps.track.id) {
            this.state.track === new Audio() ? 
            null : 
            (this.state.track.pause() && this.setState({
                playing: false
            }));
        } 
        return true;
    }

    componentDidMount() {
        this.state.track.play();
    }

    componentDidUpdate(prevProps) {
        if (this.props.track.id !== prevProps.track.id) {
            this.setState({
                track: new Audio(this.props.track.trackUrl)
        });
        }
        if (this.props.track.id === prevProps.track.id && this.state.playing) {
            return this.state.track.play();
        }
    }

    trackPause(e) {
        e.preventDefault();
        this.state.track.pause();
        this.setState({
            playing: false
        });
    }

    trackPlay(e) {
        e.preventDefault();
        this.state.track.play();
    }

    trackSkipfwd(e) {
        e.preventDefault();
    }

    trackSkipbwd(e) {
        e.preventDefault();
    }

    render() {
        const duration = (this.state.track.duration / 60 ) || "0:00";
        return (
            <div className="cpb">
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
                                        <span className="cpb-timeline-timepassed-show">timepassed</span>
                                    </div>
                                    <div className="cpb-timeline-progress">
                                        <div className="cpb-timeline-progress-bg">
                                        </div>
                                        <div className="cpb-timeline-progress-timepassed">
                                        </div>
                                        <div className="cpb-timeline-progress-handle">
                                        </div>
                                    </div>
                                    <div className="cpb-timeline-duration">
                                        <span className="cpb-timeline-duration-show">{duration}</span>
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