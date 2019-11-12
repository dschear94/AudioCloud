import React from 'react';

class Artwork extends React.Component {
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
                id={`artwork-image${track.id}`}
                className="artwork-image"
                style={{ backgroundImage: "url(" + track.photoUrl + ")", cursor: "auto" }}
            ></span>
        )
    }
};

export default Artwork;