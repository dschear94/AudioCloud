import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
    RECEIVE_ENTRY_FOUND,
} from '../actions/entry_actions';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        case RECEIVE_ENTRY_FOUND:
            return { id: action.entryUser.id };
        default:
            return state;
    }
};

export default sessionReducer;
