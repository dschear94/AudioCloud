import { connect } from 'react-redux';
import React from 'react';
import { signup, processSignupStepOne, processSignupStepTwo} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    let { errors, entry } = state;
    return {
        errors: errors.session,
        formType: ownProps.formType || 'signup',
        user: entry.user || {
            entryField: '',
            username: '',
            email: '',
            password: '',
            age: 0,
            gender: '',
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processSignupStepOne: user => dispatch(processSignupStepOne(user)),
        processSignupStepTwo: user => dispatch(processSignupStepTwo(user)),
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: (type) => dispatch(openModal(type)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);