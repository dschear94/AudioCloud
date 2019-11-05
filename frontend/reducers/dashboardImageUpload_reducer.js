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
            return Object.assign({}, {avatar: action.avatar});
        case CLEAR_AVATAR:
            return null;
        case HEADER_IMAGE:
            return Object.assign({}, {headerImage: action.headerImage});
        case CLEAR_HEADER_IMAGE:
            return null;
        default:
            return state;
    }
}
