import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

class AvatarUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: null
        }
    }

    componentDidMount() {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ avatarUrl: fileReader.result });
        };
        fileReader.readAsDataURL(this.props.avatar);
    }

    render() {
        const avatarImage = this.state.avatarUrl ? <img src={this.state.avatarUrl}/> : null;
        return (
            <div>
                "hi avatar"
                {avatarImage}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // let avatar = state.ui.dashboardImageUpload
    let avatar = state.ui.dashboardImageUpload.avatar
    return {
        avatar: avatar
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarUpload);