import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';
import Avatar3 from '../artwork/avatar3';

class TrackCommentItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.hideControls = this.hideControls.bind(this);
        this.showControls = this.showControls.bind(this);
    }
    showControls() {
        document.getElementById(`commentItem_meta_controls${this.props.comment.id}`).style.opacity = "1"
        document.getElementById(`commentItem_meta_controls${this.props.comment.id}`).style.visibility = "visible"
    }

    hideControls() {
        document.getElementById(`commentItem_meta_controls${this.props.comment.id}`).style.opacity = "0"
        document.getElementById(`commentItem_meta_controls${this.props.comment.id}`).style.visibility = "hidden"
    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id);
    }
    
    render() {
    const { comment, currentUser, artists } = this.props;
    const trash = comment.author === currentUser.username ? (
        <div
        className="trash-button"
        onClick={this.handleDelete}
        >
            <FontAwesomeIcon icon={faTrash} />
        </div>
    ) : (
        null
    );

    return (
    <li className="commentItemLi">
        <div 
        onMouseEnter={this.showControls}
        onMouseLeave={this.hideControls}
        className="commentItem">
            <div className="commentItem_read">
                <div className="commentItem_avatar">
                    <div className="ci_av_image">
                        <Avatar3 comment={comment}/>
                    </div>
                </div>
                <div className="commentItem_content">
                    <span className="commentItem_username">
                        <Link to={`/${comment.author}`}>{comment.author}</Link>
                    </span>
                    <div 
                    className="commentItem_body">
                        <p>{comment.body}</p>
                    </div>
                </div>
                <div className="commentItem_meta">
                    <span className="commentItem_meta_ca">
                        <span>{relativeTime(comment.created_at)}</span>
                    </span>
                        <div 
                        id={`commentItem_meta_controls${this.props.comment.id}`}
                        className="commentItem_meta_controls">
                        {trash}
                    </div>
                </div>
            </div>
        </div>
    </li>
    )}

}

export default TrackCommentItem;