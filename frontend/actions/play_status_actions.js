export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';


export const pauseTrack = () => {
    return {
        type: PAUSE,
    }
};

export const playTrack = () => {
    return {
        type: PLAY,
    }
};

export const sendPauseTrack = () => dispatch => {
    return dispatch(pauseTrack());
}

export const sendPlayTrack = () => dispatch => {
    return dispatch(playTrack());
}