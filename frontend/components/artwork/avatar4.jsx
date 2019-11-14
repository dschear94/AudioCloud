import React from 'react';

class Avatar4 extends React.Component {
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
        const { artist } = this.props;

        const avatar = artist.avatar ? (<span
            className="artwork-image"
            style={{ backgroundImage: "url(" + artist.avatar + ")", borderRadius: "50%" }}
        ></span>) : (<div></div>);

        return (
            < div
                style={{ height: "100%", width: "100%"}}>
                {avatar}
            </div >
        )
    }
};

export default Avatar4;