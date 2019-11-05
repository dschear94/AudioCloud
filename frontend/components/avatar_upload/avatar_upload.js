import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

class AvatarUpload extends React.Component {

    render() {
        return (
            <div>
                "hi avatar"
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarUpload);