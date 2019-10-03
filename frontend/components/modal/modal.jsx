import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EntryFormContainer from '../session_form/entry_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({ modal, closeModal }) {
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
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div onClick={closeModal} className="close-x">x</div>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
