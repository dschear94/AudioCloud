import { RECEIVE_PHOTOS } from '../actions/photo_actions';

const photosReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return Object.assign({}, state, action.photos );
        default:
            return state;
    }
};

export default photosReducer;
