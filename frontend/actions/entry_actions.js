import * as APIUtil from '../util/entry_api_util';
import { receiveErrors } from './session_actions';


export const RECEIVE_ENTRY_FOUND = 'RECEIVE_ENTRY_FOUND';


export const receiveEntryFound = entryUser => {
    return {
        type: RECEIVE_ENTRY_FOUND,
        entryUser
    }
};

export const processEntryStep = user => dispatch => {
    return APIUtil.processEntryStep(user).then(user => (
        dispatch(receiveEntryFound(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};