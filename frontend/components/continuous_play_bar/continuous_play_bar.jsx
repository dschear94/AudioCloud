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
            track: new Audio(this.props.track.trackUrl)
        }   
        this.trackPlay = this.trackPlay.bind(this);
    }


    shouldComponentUpdate(nextProps, nextState) {
        this.state.track === new Audio() ? null : this.state.track.pause();

        return true;
    }

    componentDidMount() {
        this.state.track.play();
    }

    // componentDidUpdate(prevProps) {
    // }

    trackPlay(e) {
        e.preventDefault();
        this.state.track.play();
    }

    trackSkipfwd(e) {
        e.preventDefault();
    }

    render() {
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
                                play/pause
                            </button>
                            <button className="cpb-skip-forward">
                                skip
                            </button>
                            <div className="cpb-shuffle">
                                
                            </div>
                            <div className="cpb-repeat">

                            </div>
                            <div className="cpb-timeline">

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