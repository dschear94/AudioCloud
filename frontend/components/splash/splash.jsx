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
        const photo = this.props.photos ? <img className="splash-image" src={this.props.photos[0].photoUrl}/> : null;
        return (
            <div>
                <div className="splash-main-banner">
                    {photo}
                </div>
                <div className="splash-main-content1">

                </div>
                <div className="splash-main-content2">

                </div>
                <div className="splash-main-content3">

                </div>
                <div className="splash-main-content4">
                    <div className="splash-main-content4-module">
                        <div className="splash-main-content4-module-text">
                            Thanks for listening. Now join in.
                        </div>
                        <p className="splash-main-content4-module-p">
                            Save tracks, follow artists and build playlists. All for free.
                        </p>
                        <div className="splash-main-content4-signup">
                            <button className="splash-main-content4-signup-btn">
                                Create account
                            </button>
                        </div>
                        <div className="splash-main-content4-login">
                            Already have an account? <button className="splash-main-content4-login-btn">Sign in</button>
                        </div>
                    </div>
                </div>
                <div className="splash-main-footer">
                    <div className="splash-main-footer-content">
                        A bunch of legal links
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(connect(msp, mdp)(Splash));