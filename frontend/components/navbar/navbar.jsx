import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';




const Navbar = (props) => {
    let { currentUser, logout, openModal } = props;
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

        if (props.match.path === "/" && props.match.isExact && !currentUser) {
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
                                        <Link className="navLink" to="/discover">Home</Link>
                                    </li>
                                    <li className="nav-left-main-li">
                                        {currentUser ?
                                            <Link className="navLink" to="/stream">Stream</Link>
                                            : <div className="navLink" onClick={() => openModal('entry')}>Stream</div>}
                                    </li>
                                    <li className="nav-left-main-li">
                                        {currentUser ?
                                            <Link className="navLink" to="/you/library">Library</Link>
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
                                    <Link className="navLinkupload" to="/upload">Upload</Link>
                                    : <div className="navLinkupload" onClick={() => openModal('entry')}>Upload</div>}
                            </div>
                            {currentUser ? personalGreeting() : sessionLinks()}
                            <ul className="nav-right-main-dropdown">
                                <li className="nav-right-main-dropdown-dots">
                                    <a className="nav-right-main-dropdown-dots-actual"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
};


export default withRouter(Navbar);
