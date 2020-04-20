import React from 'react';

const Profile = props => {
  return (
    <div className="Profile">
      <img src="#" alt="Profile Pic" />
      <p><em>{props.name}</em></p>
      <button className="FollowButton">Follow</button>
    </div>
  )
}

export default Profile;