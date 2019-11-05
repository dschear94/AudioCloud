import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import {
    sendAvatar,
    clearAvatar,
} from '../../actions/dashboardImageUpload_actions';
import {
    updateUser
} from '../../actions/session_actions'

class AvatarUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatarUrl: null
        }

        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ avatarUrl: fileReader.result });
        };
        fileReader.readAsDataURL(this.props.avatar);
    }

    componentWillUnmount() {
        this.props.clearAvatar()
    }

    handleSave(e) {
        e.preventDefault();
        const trackFormData = new FormData();
        trackFormData.append('user[avatar]', this.props.avatar);
        trackFormData.append('user[username]', this.props.user.username);
        return this.props.updateUser(trackFormData)
            // .then((() => this.props.history.push("/discover")))
    }

    render() {
        const avatarImage = this.state.avatarUrl ? <img src={this.state.avatarUrl}/> : null;
        return (
            <div>
                <h2 className="avatarUploadUsername">
                    {/* currentuser goes here */}
                </h2>
                <div className="avatarImageContainer">
                    {avatarImage}
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
    console.log(state.entities)
    let avatar = state.ui.dashboardImageUpload.avatar;
    let user = Object.values(state.entities.users)[0];
    return {
        avatar: avatar,
        user: user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
            
        sendAvatar: avatar => dispatch(sendAvatar(avatar)),
        clearAvatar: () => dispatch(clearAvatar()),

        updateUser: updatedUser => dispatch(updateUser(updatedUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarUpload);