import React from 'react';
import { 
    withRouter, 
    Link,
    NavLink
} from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="user-hero">
                    <div className="profileHeader">
                        <div className="phEdit">
                            <div className="phChooserWrapper">
                                <button className="headerImageEditBtn">
                                    {/* update for current/noncurrent user */}
                                    Update Image
                                </button>
                            </div>
                        </div>
                        <div className="phInfo">
                            <div className="phInfoAvatarContainer">
                                <div className="phAvatarImage">
                                    {/* image goes here inside span*/}
                                    <div className="phAvatarBtn">
                                        <button className="imagePicker">
                                            Update Image
                                        </button>
                                        <input 
                                        className="hiddeninput" 
                                        type="file"
                                        style={{opacity: "0"}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="phInfoContentContainer">
                                <h3 className="phInfo-username">
                                    {/* username from props */}
                                </h3>
                            </div>
                        </div>
                        <div className="phBG">
                            {/* BG goes here in div */}
                        </div>
                    </div>
                </div>
                <div className="dashboard-vertical-bar">
                    <div className="userInfoBar">
                        <div className="userInfoBarTabs">
                            <ul className="userInfoBarTabsUL">
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${this.props.artist}`}
                                        activeClassName="UIBTLI-active"
                                        >
                                        All
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${this.props.artist}/toptracks`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Top Tracks
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${this.props.artist}/tracks`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Tracks
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${this.props.artist}/albums`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Albums
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${this.props.artist}/sets`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Playlists
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${this.props.artist}/reposts`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Reposts
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="userInfoBarBtns">

                        </div>
                    </div>
                </div>
                <div className="dashboard-content-container">

                </div>
            </div>
        );
    }
}


export default withRouter(Dashboard);