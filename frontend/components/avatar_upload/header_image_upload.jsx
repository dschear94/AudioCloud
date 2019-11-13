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
            headerImage: null
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
        trackFormData.append('user[headerImage]', this.props.headerImage);
        trackFormData.append('user[username]', this.props.user.username);
        return this.props.updateUser(trackFormData).then(() => this.props.history.push(this.props.currentUser.username))
        // .then((() => this.props.history.push("/discover")))
    }

    render() {
        const headerImage = this.state.headerImageUrl ? 
        <img 
        style={{height:"100%"}}
        src={this.state.headerImageUrl} /> : null;
        return (
            <div>
                <h2 className="headerImageUploadUsername">
                    {/* currentuser goes here */}
                </h2>
                <div 
                style={{height: "300px"}}
                className="headerImageImageContainer">
                    {headerImage}
                </div>
                <div className="headerImageFooterContainer">
                    <div className="headerImageFooterErrors">
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