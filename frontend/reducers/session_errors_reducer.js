import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import {
    RECEIVE_ENTRY_FOUND
} from '../actions/entry_actions'

import { CLOSE_MODAL } from '../actions/modal_actions';


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors || state;
        case RECEIVE_ENTRY_FOUND:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};

