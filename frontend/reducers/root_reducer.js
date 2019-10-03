import { combineReducers } from 'redux';

import entities from './entities_reducer';
import ui from './ui_reducer';
import session from './session_reducer';
import entry from './entry_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    entry,
    ui,
    errors,
});

export default rootReducer;


// removed ui and import
