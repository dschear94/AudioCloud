import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TrackCommentItem from './track_comment_item';

class TrackCommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.track.id) {
            this.props.fetchTrackComments(this.props.track.id)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.track.id !== prevProps.track.id) {
            this.props.fetchTrackComments(this.props.track.id)
        }
    }

    componentWillUnmount() {
        this.props.clearComments();
    }

    render() {
        const trackItems = this.props.comments.reverse().map(comment =>
                <TrackCommentItem 
                    key={comment.id} 
                    comment={comment} 
                />
        );
        return (
            <div>
                {trackItems}
            </div>
        );
    }
}

export default withRouter(TrackCommentIndex);