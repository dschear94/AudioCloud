import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { processEntryStep } from '../../actions/entry_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors, entry }) => {
    return {
        errors: errors.session,
        formType: 'entry',
        user: entry.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processEntryStep: (user) => dispatch(processEntryStep(user)),
        login: (user) => dispatch(login(user)),
        nextStep: (user) => dispatch(openModal(user.found)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
