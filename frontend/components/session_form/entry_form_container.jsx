import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { processEntryStep } from '../../actions/entry_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    let { errors, entry } = state;
    return {
        errors: errors.session,
        formType: 'entry',
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
        processEntryStep: (user) => dispatch(processEntryStep(user)),
        login: (user) => dispatch(login(user)),
        openModal: () => dispatch(openModal('entry')),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
