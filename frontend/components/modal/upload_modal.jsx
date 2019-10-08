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
    }

    handleDrag(e) {
        e.preventDefault();
        this.setState({
            dd: true
        });
    }

    handleDragLeave(e) {
        e.preventDefault();
        this.setState({
            dd: null
        });
    }

    componentDidUpdate() {
    }

    render () {
        const upload = (
            <div
                className="upload-modal"
                onClick={closeModal}
                onDragLeave={this.handleDragLeave}
            >
                <div className="upload-modal-dropbox">
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
                className="upload-modal-bg"
                onDragEnter={this.handleDrag}
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
