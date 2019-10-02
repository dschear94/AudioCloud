import React from 'react';



const ProfileNav = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
            <div className="profile-nav">
                <button className="profile-nav-signup" onClick={() => openModal('signup')}>Create account</button>
                <button className="profile-nav-login" onClick={() => openModal('login')}>Sign in</button>
            </div>
    );
    const personalGreeting = () => (
            <div className="profile-nav">
                <li className="profile-nav-logout" onClick={logout}>Log Out</li>
            </div>
    );

    return (
        <div>
            {currentUser ? personalGreeting() : sessionLinks()}
        </div>
    )
};


export default ProfileNav;
