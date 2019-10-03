import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';



export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
);





// SIGNUP STEPS




export const RECEIVE_ENTRY_ACCEPT = 'RECEIVE_ENTRY_ACCEPT';


export const receiveEntryAccept = signupUser => {
    return {
        type: RECEIVE_ENTRY_ACCEPT,
        signupUser
    }
};

export const RECEIVE_ENTRY_ACCEPT2 = 'RECEIVE_ENTRY_ACCEPT2';


export const receiveEntryAccept2 = signupUser => {
    return {
        type: RECEIVE_ENTRY_ACCEPT2,
        signupUser
    }
};

export const processSignupStepOne = user => dispatch => {
    return APIUtil.processSignupStepOne(user).then(user => (
        dispatch(receiveEntryAccept(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

export const processSignupStepTwo = user => dispatch => {
    return APIUtil.processSignupStepTwo(user).then(user => (
        dispatch(receiveEntryAccept2(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};