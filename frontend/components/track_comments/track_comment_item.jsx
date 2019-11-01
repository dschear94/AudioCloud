import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';


const TrackCommentItem = ({ comment }) => {
    return (
    <li className="commentItemLi">
        <div className="commentItem">
            <div className="commentItem_read">
                <div className="commentItem_avatar">
                    <div className="ci_av_image">
                        {/* <span>image here</span> */}
                    </div>
                </div>
                <div className="commentItem_content">
                    <span className="commentItem_username">
                        <Link to={`/${comment.author}`}>{comment.author}</Link>
                    </span>
                    <div className="commentItem_body">
                        <p>{comment.body}</p>
                    </div>
                </div>
                <div className="commentItem_meta">
                    <span className="commentItem_meta_ca">
                        <span>{relativeTime(comment.created_at)}</span>
                    </span>
                    <div className="commentItem_meta_controls">

                    </div>
                </div>
            </div>
        </div>
    </li>
)};

export default TrackCommentItem;