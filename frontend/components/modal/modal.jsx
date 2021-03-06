import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EntryFormContainer from '../session_form/entry_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import AvatarUpload from '../avatar_upload/avatar_upload';
import HeaderImageUpload from '../avatar_upload/header_image_upload'

function Modal(state) {
    let { modal, closeModal } = state;
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'entry':
            component = <EntryFormContainer />;
            break;
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'signup2':
            component = <SignupFormContainer formType="signup2" />;
            break;
        case 'signup3':
            component = <SignupFormContainer formType="signup3" />;
            break;
        case 'avatar':
            component = <AvatarUpload/>;
            break;
        case 'headerImage':
            component = <HeaderImageUpload/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className="modal-content">
                    {component}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.ui.modal || ownProps.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
