import React from 'react';

const Post = props => {
  return (
    <div className="Post">
      <img src="#" alt="Profile Pic" />
      <p><em>{props.author}</em></p>
      <p>{props.body}</p>
    </div>
  )
}

export default Post;