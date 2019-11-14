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
            avatarUrl: null,
            loading: false
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
        this.setState({ loading: true });
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return (
            this.props.updateUser(trackFormData).then(() => {
                window.location.reload();
            })
        );
            // .then((() => this.props.history.push("/discover")))
    }

    render() {
        const avatarImage = this.state.avatarUrl ? <span
            className="artwork-image"
            style={{ backgroundImage: "url(" + this.state.avatarUrl + ")" }}
        ></span> : null;
        const loader = (<div className="loading-spinner-background"><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></div>);
        return this.state.loading ? loader : (
            <div>
                <h2 className="avatarUploadUsername">
                    {this.props.user.username}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AvatarUpload));