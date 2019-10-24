import React from 'react';
import { withRouter } from 'react-router-dom';

class Stream extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.tracks.length === 0) {
            this.props.fetchTracks();
        }
    }
}