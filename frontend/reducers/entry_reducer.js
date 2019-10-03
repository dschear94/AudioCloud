import { RECEIVE_ENTRY_FOUND } from '../actions/entry_actions';

const _nullUser = Object.freeze({
    id: null
});

const entryReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ENTRY_FOUND:
            return { id: action.entryUser.id };
        default:
            return state;
    }
};

export default entryReducer;
