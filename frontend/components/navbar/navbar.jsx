import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';




const Navbar = (props) => {
    let { currentUser, logout, openModal } = props;
    const sessionLinks = () => (
            <ul className="profile-nav">
                <li className="profile-nav-login" onClick={() => openModal('entry')}>Sign in</li>
                <li className="profile-nav-signup" onClick={() => openModal('entry')}>Create account</li>
            </ul>
    );
    const personalGreeting = () => (
            <ul className="profile-nav">
                <li className="profile-nav-logout" onClick={logout}>Log Out</li>
            </ul>
    );

        if (props.match.path === "/" && props.match.isExact && !currentUser) {
            return null;
        } else {
            return (
                <div className="nav-main">
                    <ul className="nav-left-main">
                        <Link to="/" className="logo">ACdev</Link>
                        <li>
                            <Link className="navLink" to="/discover">Home</Link>
                        </li>
                        <li>
                            {currentUser ? 
                            <Link className="navLink" to="/stream">Stream</Link>
                            : <div className="navLink" onClick={() => openModal('entry')}>Stream</div>}
                        </li>
                        <li>
                            {currentUser ? 
                            <Link className="navLink" to="/">Library</Link>
                            : <div className="navLink" onClick={() => openModal('entry')}>Library</div>}
                        </li>
                        <li>
                            {currentUser ? 
                            <Link className="navLink" to="/upload">Upload</Link>
                            : <div className="navLink" onClick={() => openModal('entry')}>Upload</div>}
                        </li>
                        {/* <li><Link className="navLink" to="/upload">Upload</Link></li> */}
                    </ul>
                    {currentUser ? personalGreeting() : sessionLinks()}
                </div>
            )
        }
};


export default withRouter(Navbar);
