import React from 'react';

class HeaderImage2 extends React.Component {
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
            return true
        }
    }



    render() {
        const { track } = this.props;

        const headerImage = track.artistHeaderImage ? (<span
            className="artwork-image"
            style={{ backgroundImage: "url(" + track.artistHeaderImage + ")" }}
        ></span>) : (<div></div>);

        return (
            < div
                style={{ height: "100%", width: "100%" }}>
                {headerImage}
            </div >
        )
    }
};

export default HeaderImage2;