import React from 'react';



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
            {currentUser ? personalGreeting() : sessionLinks()}
        </div>
    )
};


export default ProfileNav;
