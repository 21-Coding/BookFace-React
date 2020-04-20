import React from 'react';
import Posts from './Posts/Posts';
import AboutMe from './AboutMe/AboutMe';
import QuickFollow from './QuickFollow/QuickFollow';
import UserProfile from './UserProfile/UserProfile';

const bodyContainer = () => {
    return (
        <div className="Container">
            <div className="profile">
                <UserProfile username={"My Name Jef"} />
                <AboutMe />
            </div>
            <Posts />
            <QuickFollow />
        </div>
    )
}

export default bodyContainer;