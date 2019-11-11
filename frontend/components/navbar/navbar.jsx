import React from 'react';
import { 
    Link,
    NavLink
 } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { faUser, faHeart, faChild, faSignOutAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Navbar extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        }

        this.handleDD = this.handleDD.bind(this);
    }

    handleDD() {
        if (this.state.dropdown) {
            this.setState({dropdown: false})
        } else {
            this.setState({ dropdown: true })
        }
    }

    render() {
    let { currentUser, logout, openModal } = this.props;
    const sessionLinks = () => (
            <div className="nav-right-main-session">
                <div className="profile-nav-login" onClick={() => openModal('entry')}>Sign in</div>
                <div className="profile-nav-signup" onClick={() => openModal('entry')}>Create account</div>
            </div>
    );
    const personalGreeting = () => (
        <div className="nav-right-main-session">
                <div className="profile-nav-login" onClick={logout}>Log Out</div>
            </div>
    );
    const dropdown = () => (
        <div className="nav-dropdown-container">
            <ul className="nav-dd-list">
                <li className="nav-dd-listitem">
                    <Link
                        className="nav-dd-listitem-link"
                        to={{
                            pathname: `/${currentUser.username}`,
                        }}>
                        <FontAwesomeIcon
                            icon={faUser}
                        />
                        <div className="nav-dd-text">
                            Profile
                                    </div>
                    </Link>
                </li>
                <li className="nav-dd-listitem">
                    <Link
                        className="nav-dd-listitem-link"
                        to={{
                            pathname: `/you/likes`,
                        }}>
                        <FontAwesomeIcon
                            icon={faHeart}
                        />
                        <div className="nav-dd-text">
                            Likes
                                    </div>
                    </Link>
                </li>
                <li className="nav-dd-listitem">
                    <Link
                        className="nav-dd-listitem-link"
                        to={{
                            pathname: `/you/following`,
                        }}>
                        <FontAwesomeIcon
                            icon={faChild}
                        />
                        <div className="nav-dd-text">
                            Following
                                    </div>
                    </Link>
                </li>
                <li className="nav-dd-listitem">
                    <div
                        className="nav-dd-listitem-link"
                        onClick={logout}>
                        <FontAwesomeIcon
                            icon={faSignOutAlt}
                        />
                        <div className="nav-dd-text">
                            Logout
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )

        if (this.props.match.path === "/" && this.props.match.isExact && !currentUser) {
            return null;
        } else {
            return (
                <div className="nav">
                    <div className="nav-main">
                        <div className="nav-left-main">
                            <div className="nav-left-main-logo">
                                <div className="nav-left-main-logo-link">
                                    <Link to="/">ACdev</Link>
                                </div>
                            </div>
                            <div className="nav-left-container">
                                <ul className="nav-left-main-ul">
                                    <li className="nav-left-main-li">
                                        <NavLink className="navLink" activeStyle={{color: "#fff", backgroundColor: "#111", outline: "0"}} to="/discover">Home</NavLink>
                                    </li>
                                    <li className="nav-left-main-li">
                                        {currentUser ?
                                            <NavLink className="navLink" activeStyle={{color: "#fff", backgroundColor: "#111", outline: "0"}} to="/stream">Stream</NavLink>
                                            : <div className="navLink" onClick={() => openModal('entry')}>Stream</div>}
                                    </li>
                                    <li className="nav-left-main-li">
                                        {currentUser ?
                                            <NavLink className="navLink" activeStyle={{color: "#fff", backgroundColor: "#111", outline: "0"}} to="/you/library">Library</NavLink>
                                            : <div className="navLink" onClick={() => openModal('entry')}>Library</div>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-center-main">
                            <div className="nav-center-searchbar-container">
                                <form className="nav-center-searchbar-form">
                                    <input type="search"
                                    className="nav-center-searchbar-input"
                                    placeholder="search coming soon." />
                                </form>
                            </div>
                        </div>
                        <div className="nav-right-main">
                            <div className="nav-right-main-upload">
                                {currentUser ?
                                    <NavLink className="navLinkupload" activeStyle={{color: "#fff", backgroundColor: "#111", outline: "0"}} to="/upload">Upload</NavLink>
                                    : <div className="navLinkupload" onClick={() => openModal('entry')}>Upload</div>}
                            </div>
                            <div className="nav-usernav">
                                <div 
                                    onClick={this.handleDD}
                                    className="nav-userbtn"
                                    >
                                    <div className="nav-avatar">
                                        <div className="artistAvImage" style={{ backgroundImage: currentUser ? "url(" + currentUser.avatar + ")" : null}}></div>
                                    </div>
                                    <div className="nav-username">
                                        <div className="nav-username-content">
                                            {currentUser ? currentUser.username : null} 
                                        </div>
                                    </div>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <ul className="nav-right-main-dropdown">
                                <li className="nav-right-main-dropdown-dots">
                                    <a className="nav-right-main-dropdown-dots-actual"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {this.state.dropdown ? dropdown() : null}
                </div>
            )
        }
};
}


export default withRouter(Navbar);
