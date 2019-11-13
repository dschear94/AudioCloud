import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import {
    sendHeaderImage,
    clearHeaderImage,
} from '../../actions/dashboardImageUpload_actions';
import {
    updateUser
} from '../../actions/session_actions'

class HeaderImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerImage: null,
            loading: false
        }

        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ headerImageUrl: fileReader.result });
        };
        fileReader.readAsDataURL(this.props.headerImage);
    }

    componentWillUnmount() {
        this.props.clearHeaderImage()
    }

    handleSave(e) {
        e.preventDefault();
        const trackFormData = new FormData();
        trackFormData.append('user[header_image]', this.props.headerImage);
        trackFormData.append('user[username]', this.props.user.username);
        this.setState({ loading: true });
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return (
            this.props.updateUser(trackFormData)
        );
    }

    render() {
        const headerImage = this.state.headerImageUrl ? 
            <span
                className="artwork-image"
                style={{ backgroundImage: "url(" + this.state.headerImageUrl + ")" }}
            ></span>: null;
        const loader = (<div className="loading-spinner-background"><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></div>);
        return this.state.loading ? loader : (
            <div>
                <h2 className="avatarUploadUsername">
                    {this.props.user.username}
                </h2>
                <div 
                    className="headerImageImageContainer">
                    {headerImage}
                </div>
                <div className="avatarFooterContainer">
                    <div className="avatarFooterErrors">
                        {/* display errors here */}
                    </div>
                    <div className="afBtns">
                        <button
                            className="afCancel"
                            onClick={this.props.closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            className="afSave"
                            onClick={this.handleSave}
                        >
                            Save
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // let avatar = state.ui.dashboardImageUpload
    let headerImage = state.ui.dashboardImageUpload.headerImage;
    let user = Object.values(state.entities.users)[0];
    return {
        headerImage: headerImage,
        user: user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),

        sendHeaderImage: headerImage => dispatch(sendHeaderImage(headerImage)),
        clearHeaderImage: () => dispatch(clearHeaderImage()),

        updateUser: updatedUser => dispatch(updateUser(updatedUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderImageUpload);