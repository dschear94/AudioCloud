import React from 'react';

class Avatar2 extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(prevProps, prevState) {
        if (this.props.track.id === prevProps.track.id) {
            return false;
        } else {
            return true;
        }
    }



    render() {
        const { track } = this.props;

        return (
            <span
                className="artwork-image"
                style={{ backgroundImage: "url(" + track.artistAvatar + ")", borderRadius: "50%" }}
            ></span>
        )
    }
};

export default Avatar2;