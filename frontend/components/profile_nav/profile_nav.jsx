import React from 'react';



const ProfileNav = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Sign in</button>
                    &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>Create account</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        <div>
            {currentUser ? personalGreeting() : sessionLinks()}
        </div>
    )
};


export default ProfileNav;
