import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TrackCommentItem from './track_comment_item';

class TrackCommentIndex extends React.Component {
    constructor(props) {
        super(props);

        debugger
        
    }
    componentDidMount() {

    }

    render() {
        debugger
        
        return (
            <TrackCommentItem/>
        );
    }
}

export default withRouter(TrackCommentIndex);