import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

class UploadModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dd: null
        }
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    handleDrag(e) {
        e.preventDefault();
        console.log("entered");
        this.setState({
            dd: true
        });
    }

    handleDisplay(e) {
        e.preventDefault();
        document.getElementById("ubg").style.display = "block";
    }

    handleDragLeave(e) {
        e.preventDefault();
        this.setState({
            dd: null
        });
        document.getElementById("ubg").style.display = "none";
    }

    handleDrop(e) {
        console.log("DROP")
        e.preventDefault();
        e.stopPropagation();
    }

    handleDragOver(e) {
        console.log("DRAGO")
        e.preventDefault();
        e.stopPropagation();
    }

    render () {
        const upload = (
            <div
                className="upload-modal"
                onClick={closeModal}
                onDrop={this.handleDrop}
                onDragLeave={this.handleDragLeave}
                onDragOver={this.handleDragOver}
            >
                <div
                    className="upload-modal-dropbox"
                >
                    <div className="upload-modal-dropbox-inner">
                        <span className="upload-modal-dropbox-inner-title">
                            Drop your files here
                        </span>
                    </div>
                </div>
            </div>
        );
        return (
            <div 
                id="ubg"
                className="upload-modal-bg"
                onDragEnter={this.handleDrag}
                // onDragEnter={this.handleDisplay}
                onDrop={this.handleDrop}
            >
                {this.state.dd ? upload : null}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.ui.modal || ownProps.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);
