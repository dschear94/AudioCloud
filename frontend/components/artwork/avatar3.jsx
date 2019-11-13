import React from 'react';

class Avatar3 extends React.Component {
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
        } else {
            return true;
        }
    }



    render() {
        const { comment } = this.props;
        debugger

        const avatar = comment.artistAvatar ? (<span
            className="artwork-image"
            style={{ backgroundImage: "url(" + comment.artistAvatar + ")" }}
        ></span>) : (<div></div>);

        return (
            < div
                style={{ height: "100%", width: "100%" }}>
                {avatar}
            </div >
        )
    }
};

export default Avatar3;