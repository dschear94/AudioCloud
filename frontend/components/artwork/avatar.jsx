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

        const avatar = currentUser.avatar ? (<span
            className="artwork-image"
            style={{ backgroundImage: "url(" + currentUser.avatar + ")" }}
        ></span>) : (<div></div>);

        return (
            < div
                style = {{ height: "100%", width: "100%" }}>
                { avatar }
            </div >
        )
    }
};

export default Avatar;