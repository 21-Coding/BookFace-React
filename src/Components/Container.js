import React from 'react';
import Posts from './Posts';
import AboutMe from './AboutMe';
import QuickFollow from './QuickFollow';

const bodyContainer = () => {
    return (
        <div className="bodyContainer">
      
            <AboutMe />
            <Posts />
            <QuickFollow />
        </div>
    )
}

export default bodyContainer;