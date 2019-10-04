import React from 'react';
import { Link } from 'react-router-dom';



const ProfileNav = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
            <div className="profile-nav">
                <button className="profile-nav-signup" onClick={() => openModal('entry')}>Create account</button>
                <button className="profile-nav-login" onClick={() => openModal('entry')}>Sign in</button>
            </div>
    );
    const personalGreeting = () => (
            <div className="profile-nav">
                <button className="profile-nav-logout" onClick={logout}>Log Out</button>
            </div>
    );

    return (
        <div>
            <div className="navLink"><Link to="/" className="logo">AudioCloud - Development</Link></div>
            <div className="navLink"><Link to="/">Home</Link></div>
            <div className="navLink"><Link to="/">Stream</Link></div>
            <div className="navLink"><Link to="/">Library</Link></div>
            <div className="navLink">
            {currentUser ? <Link to="/upload">Upload</Link> : <div onClick={() => openModal('entry')}>
            Upload</div>}
            </div>
            {currentUser ? personalGreeting() : sessionLinks()}
        </div>
    )
};


export default ProfileNav;
