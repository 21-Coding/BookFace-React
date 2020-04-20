import React from 'react';

const UserProfile = props => {
  return (
    <div className="UserProfile">
      <div className="profileHeader">
        <img src="https://www.snakkle.com/wp-content/uploads/2011/07/kenan-thompson-GC.jpg" alt="User pic" />
        <h3>{props.username}</h3>
      </div>
      <div>
        <a href="#">Tweets</a>
        <a href="#">Following</a>
        <a href="#">Followers</a>
      </div>
    </div>
  )
}

export default UserProfile;