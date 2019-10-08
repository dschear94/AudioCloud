import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import { withRouter } from 'react-router-dom';

const msp = state => ({
    state
});

const mdp = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
})

class ContinuousPlayBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {
        return (

            <div>
                BAR
            </div>

        );
    }
}


export default withRouter(connect(msp, mdp)(ContinuousPlayBar));