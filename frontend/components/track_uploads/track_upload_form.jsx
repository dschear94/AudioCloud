import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackUploadForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props;

        this.state = {
            title: "",
            trackFile: null,
            trackUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ trackFile: file, trackUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const trackFormData = new FormData();
        trackFormData.append('track[title]', this.state.title);
        if (this.state.trackFile) {
            trackFormData.append('track[audio_file]', this.state.trackFile);
        };
        return this.props.uploadTrack(trackFormData);

    }

    render() {
        return (
        <div>
            <h1>Upload Music Here</h1>
                <p>
                    See photos here
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.handleInput} />
                    <input 
                        type="file" 
                        accept=".mp3,audio/*" 
                        onChange={this.handleFile}/>
                    <input type="submit" value="Upload Track"/>
                </form>
        </div>
        )
    }
}


export default withRouter(TrackUploadForm);