import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            album: "",
            trackFile: null,
            trackUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field) {
        return e => {
            return this.setState({ 
                [field]: e.currentTarget.value
            });
        };
        
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
        trackFormData.append('track[album]', this.state.album);
        trackFormData.append('track[artist_id]', this.props.currentUser);
        if (this.state.trackFile) {
            trackFormData.append('track[audio_file]', this.state.trackFile);
        };
        return this.props.uploadTrack(trackFormData);
    }

    render() {
    const uploadStep1 = (
                <div className="track-upload-content">
                <div className="uploadBG"></div>
                <div className="uploadForm">
                    <div className="uploadForm-content">
                        <h1 className="uploadForm-content-header">Drag and drop your tracks & albums here</h1>
                        <div className="uploadForm-submit-container">
                            <input
                                className="input-dd"
                                type="file"
                                accept=".mp3,audio/*"
                                onChange={this.handleFile} />
                            <button 
                                onClick={() => this.handleSubmit}
                                className="upload-button">
                                or choose files to upload
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            )
        const uploadStep2 = (
        <div className="track-upload-content">
            <div className="uploadBG"></div>
            <div className="uploadForm">
                <div className="uploadForm-content">
                    <h1 className="uploadForm-content-header">Drag and drop your tracks & albums here</h1>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.handleInput('title')} />
                    <input type="text"
                        value={this.state.album}
                        onChange={this.handleInput('album')} />
                </div>
            </div>
        </div>
        )
        return (
        <div className="track-upload-container">
                {this.state.trackFile ? uploadStep2 : uploadStep1}
        </div>
        );
    }
}


export default withRouter(TrackUploadForm);