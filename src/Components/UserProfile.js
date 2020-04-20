import React from 'react';
import bodyContainer from './Container';

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <NavItem text={"Tweets"} />
      <NavItem text={"Following"} />
      <NavItem text={"Followers"} />
    </div>
  )
}

export default UserProfile;