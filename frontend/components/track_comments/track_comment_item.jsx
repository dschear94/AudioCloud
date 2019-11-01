import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';


const TrackCommentItem = ({ comment }) => {
    return (
    <div>
        {comment.body}
        {comment.author}
    </div>
)};

export default TrackCommentItem;