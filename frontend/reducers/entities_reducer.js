import { combineReducers } from 'redux';

import users from './users_reducer';
import photos from './photos_reducer';
import tracks from './tracks_reducer';
import currentTrack from './current_track_reducer';
import artists from './artists_reducer';
import comments from './comments_reducer';

export default combineReducers({
    users,
    photos,
    tracks,
    currentTrack,
    artists,
    comments
});
