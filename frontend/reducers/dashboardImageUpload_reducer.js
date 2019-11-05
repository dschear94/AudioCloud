import { 
    AVATAR,
    CLEAR_AVATAR,
    HEADER_IMAGE,
    CLEAR_HEADER_IMAGE
} from '../actions/dashboardImageUpload_actions';


export default function modalReducer(state = null, action) {
    Object.freeze(state);
    switch (action.type) {
        case AVATAR:
        case CLEAR_AVATAR:
        case HEADER_IMAGE:
        case CLEAR_HEADER_IMAGE:
        default:
            return state;
    }
}
