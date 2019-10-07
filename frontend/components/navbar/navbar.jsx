import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout, openModal }) => {
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

    return (
            <div className="nav-main">
                <ul className="nav-left-main">
                    <Link to="/" className="logo">ACdev</Link>
                    <li><Link className="navLink" to="/">Home</Link></li>
                    <li><Link className="navLink" to="/">Stream</Link></li>
                    <li><Link className="navLink" to="/">Library</Link></li>
                    <li>{currentUser ? <Link className="navLink" to="/upload">Upload</Link>
                        : <div className="navLink" onClick={() => openModal('entry')}>Upload</div>}</li>
                {/* <li><Link className="navLink" to="/upload">Upload</Link></li> */}
                </ul>
                {currentUser ? personalGreeting() : sessionLinks()}
            </div>
        

    )
};


export default Navbar;
