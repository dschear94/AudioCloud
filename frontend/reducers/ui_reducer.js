import { combineReducers } from 'redux';

import modal from './modal_reducer';
import dashboardImageUpload from './dashboardImageUpload_reducer';
import playStatus from './play_status_reducer';

export default combineReducers({
    modal,
    dashboardImageUpload,
    playStatus
});
