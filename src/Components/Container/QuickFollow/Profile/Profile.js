import React from 'react';

const Profile = props => {
  return (
    <div className="Profile">
      <img src="#" alt="Profile Pic" />
      <div>
        <p><strong>{props.name}</strong></p>
        <button className="FollowButton">Follow</button>
      </div>
    </div>
  )
}

export default Profile;