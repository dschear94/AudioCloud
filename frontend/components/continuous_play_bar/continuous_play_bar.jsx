import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
    return {track: state.entities.currentTrack}
};

const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
})

class ContinuousPlayBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.track
    }

    // componentDidMount() {
    //     this.props.fetchTracks();
    // }

    render() {
        const track = this.props.track ? <audio controls src={this.props.track.trackUrl}>{this.props.track.title}</audio> : null;
        return (
            <div>
                BAR
                {track}
            </div>

        );
    }
}


export default withRouter(connect(msp, mdp)(ContinuousPlayBar));