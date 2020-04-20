import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

const Posts = props => {
  return (
    <div className="Posts">
      <CreatePost />
      <Post author={"ZakkAttack"} body={"This app is dope yall. 420 Blaz3"} />
      <Post author={"Brando"} body={"I can cook"} />
      <Post author={"Dom"} body={"Lets do this"} />
      <Post author={"Jam"} body={"What we doin?"} />
    </div>
  )
}

export default Posts;