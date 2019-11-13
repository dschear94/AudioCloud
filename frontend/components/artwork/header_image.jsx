import React from 'react';

class HeaderImage extends React.Component {
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
        const { artist } = this.props;

        const headerImage = artist.headerImage ? (<span
            className="artwork-image"
            style={{ backgroundImage: "url(" + artist.headerImage + ")" }}
        ></span>) : (<div></div>);

        return (
            < div
                style={{ height: "100%", width: "100%" }}>
                {headerImage}
            </div >
        )
    }
};

export default HeaderImage;