import React from 'react';
import { withRouter } from 'react-router-dom';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props;
    }
    render() {
        return (
        <div>
            <h1>Upload Music Here</h1>
                <p>
                    See photos here
                </p>
        </div>
        )
    }
}


export default withRouter(UploadForm);