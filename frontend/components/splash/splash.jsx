import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchPhotos} from '../../actions/photo_actions';


const msp = state => {
    return {photos: state.entities.photos} ||  [];
}

const mdp = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos())
})

class Splash extends React.Component {

    componentDidMount () {
        this.props.fetchPhotos();
    }

    render() {
        // return null;
        const photo = this.props.photos ? <img className="splash" src={this.props.photos[0].photoUrl}/> : null;
        return (
            <div>
                {photo}
            </div>
        );
    }
}


export default withRouter(connect(msp, mdp)(Splash));