import { combineReducers } from 'redux';

import modal from './modal_reducer';
import dashboardImageUpload from './dashboardImageUpload_reducer';

export default combineReducers({
    modal,
    dashboardImageUpload
});
