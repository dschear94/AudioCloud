import React from 'react';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(prevProps, prevState) {
        if (this.props.currentUser) {
            if (this.props.currentUser.id === prevProps.currentUser.id) {
                return false;
            } else {
                return true;
            }
        }
    }



    render() {
        const { currentUser } = this.props;

        const avatar = currentUser ? (<span
            className="artwork-image"
            style={{ backgroundImage: "url(" + currentUser.avatar + ")" }}
        ></span>) : (<div></div>);

        return (
            avatar
        )
    }
};

export default Avatar;