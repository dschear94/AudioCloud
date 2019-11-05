import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                In Progress
            </div>
        );
    }
}


export default withRouter(Dashboard);