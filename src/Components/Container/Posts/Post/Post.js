import React from 'react';

const Post = props => {
  return (
    <div className="Post">
      <img src={props.pic} alt="Profile Pic" />
      <div>
        <p><strong>{props.author}</strong></p>
        <hr />
        <p>{props.body}</p>
      </div>
    </div>
  )
}

export default Post;