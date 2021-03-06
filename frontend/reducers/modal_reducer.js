import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_ENTRY_FOUND } from '../actions/entry_actions';
import { 
    RECEIVE_ENTRY_ACCEPT, 
    RECEIVE_ENTRY_ACCEPT2, 
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER
 } from '../actions/session_actions';


export default function modalReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_CURRENT_USER:
            return null;
        case RECEIVE_ENTRY_FOUND:
            if (action.entryUser.found) {
                return "login";
            } else {
                return "signup";
            };
        case RECEIVE_ENTRY_ACCEPT:
            if (action.signupUser) {
                return "signup2";
            } else {
                return "signup";
            }
        case RECEIVE_ENTRY_ACCEPT2:
            if (action.signupUser) {
                return "signup3";
            } else {
                return "signup2";
            }
        case RECEIVE_SESSION_ERRORS:
            if (action.errors[0] === "Enter a valid email address or profile URL") {
                return 'entry';
            } else if (action.errors[0] === "This password is incorrect.") {
                return "login";
            } else {
                return 'signup3'
            }
        default:
            return state;
    }
}
