import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            album: "",
            trackFile: null,
            trackUrl: null,
            photoFile: null,
            photoUrl: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTrackFile = this.handleTrackFile.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.triggerHiddenInput = this.triggerHiddenInput.bind(this);
        this.triggerHiddenInput2 = this.triggerHiddenInput2.bind(this);
    }

    handleInput(field) {
        return e => {
            return this.setState({ 
                [field]: e.currentTarget.value
            });
        };
    }

    triggerHiddenInput(e) {
        e.preventDefault();
        document.getElementById('uploadhidden').click();
    }

    triggerHiddenInput2(e) {
        e.preventDefault();
        document.getElementById('uploadhidden2').click();
    }

    // handleTrackFile(e) {
    //     e.preventDefault();
    //     const file = e.currentTarget.files[0];
    //     const fileReader = new FileReader();
    //     fileReader.onloadend = () => {
    //         this.setState({ trackFile: file, trackUrl: fileReader.result });
    //     };
    //     if (file) {
    //         fileReader.readAsDataURL(file);
    //     }
    // }

    handleTrackFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ trackFile: file, trackUrl: fileReader.result });
            // let audioData = fileReader.result;
            // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            // let source;
            // function getData() {
            //     source = audioCtx.createBufferSource();
            //     console.log(audioData)
            //     const data = new Uint16Array(audioData);
            //     console.log(data);
            //     audioCtx.decodeAudioData(audioData).then(decodedData => console.log(decodedData))
            // }

            // getData();
        };
        if (file) {
            fileReader.readAsDataURL(file);
            // fileReader.readAsArrayBuffer(file)
            // .then(audioData => {
            //     var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            //     let source;

            //     function getData() {
            //         source = audioCtx.createBufferSource();
            //         audioCtx.decodeAudioData(audioData).then(decodedData => console.log(decodedData))
            //     }
    
            //     getData();
            // })





            // debugger
        }
    }

    handlePhotoFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
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
        if (this.state.photoFile) {
            trackFormData.append('track[image_file]', this.state.photoFile);
        };
        return (
            this.props.uploadTrack(trackFormData)
            .then(() => this.props.fetchTracks())
            .then(() => this.props.history.push("/discover"))
        );
    }

    render() {
    const uploadStep1 = (
                <div 
                className="track-upload-content">
                <div className="uploadBG"></div>
                <div className="uploadForm">
                    <div className="uploadForm-content">
                        <h1 className="uploadForm-content-header">Drag and drop your tracks & albums here</h1>
                        <div className="uploadForm-submit-container">
                            <form>
                                <input
                                    id="uploadhidden"
                                    className="input-dd"
                                    type="file"
                                    accept=".mp3,audio/*"
                                    onChange={this.handleTrackFile} />
                                <button
                                    onClick={this.triggerHiddenInput}
                                    className="upload-button">
                                    or choose files to upload
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            )
        const uploadStep2 = (
        <div className="track-upload-details">
            <div className="track-upload-details2">
                <ul className="track-upload-details3">
                    <li className="track-upload-item">
                        <div className="editing">
                            <div className="editing-wrapper">
                                <div className="upload-detail-form">
                                    <div className="tab-tabs">
                                        <ul className="tabs-large">
                                            <li className="tabs-item">
                                                <span className="tabs-item-text">Basic Info</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tabs-content">
                                        <div className="tabs-content1">
                                            <div className="tabs-content2">
                                                <div className="tabs-content-title">
                                                    <div className="tabs-content-title-text">
                                                        <span className="tabs-content-title-text-label">Title</span>
                                                        <div className="tabs-content-title-text-inputwrapper">
                                                            <input 
                                                                type="text"
                                                                className="tabs-content-title-input" 
                                                                value={this.state.title}
                                                                onChange={this.handleInput('title')} 
                                                                />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="basic-info-image">
                                                    {/* <img src="" alt=""/> */}
                                                    <div className="image-btn-container">
                                                        <form>
                                                            <input
                                                                id="uploadhidden2"
                                                                className="input-dd"
                                                                type="file"
                                                                accept="*"
                                                                onChange={this.handlePhotoFile} />
                                                            <button
                                                                className="image-btn"
                                                                onClick={this.triggerHiddenInput2}>
                                                                Upload Image
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="tabs-content-album">
                                                    <div className="tabs-content-album-text">
                                                        <span className="tabs-content-album-text-label">Album</span>
                                                        <div className="tabs-content-album-text-inputwrapper">
                                                            <input
                                                                type="text"
                                                                className="tabs-content-album-input" 
                                                                value={this.state.album}
                                                                onChange={this.handleInput('album')} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="upload-form-submit-buttons">
                                        <div className="requiredtextnote">
                                            <span className="star">*</span>Required fields
                                        </div>
                                        <button 
                                            className="savebtn"
                                            onClick={this.handleSubmit}>Save
                                        </button>
                                        <button className="cancelbtn">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        );
        return (
        <div className="track-upload-container">
                {this.state.trackFile ? uploadStep2 : uploadStep1}
        </div>
        );
    }
}


export default withRouter(TrackUploadForm);