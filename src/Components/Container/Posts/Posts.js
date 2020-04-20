import React from 'react';
import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost';

const Posts = props => {
  return (
    <div className="Posts">
      <CreatePost />
      <Post author={"2kz"} body={"4/20 should be a national holiday"} pic={"https://weedmemes.com/wp-content/uploads/2015/11/stormtroopers-weedmemes.jpg"} />
      <Post author={"Drake"} body={"Toosie slide then I hit it double time"} pic={"https://pyxis.nymag.com/v1/imgs/bcc/37a/e22113c0d1fa59b710e5e4d643e2e65110-drake.rsquare.w1200.jpg"} />
      <Post author={"Super Dude"} body={""} pic={"https://www.snakkle.com/wp-content/uploads/2011/07/kenan-thompson-GC.jpg"} />
      <Post author={"Jam"} body={"What we doin?"} pic={"https://www.leafbuyer.com/blogs/content/uploads/2018/07/shutterstock_195620264.jpg"} />
      <Post author={"Geoff"} body={"My name jef"} pic={"https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.oregonlive.com/home/olive-media/width2048/img/washingtoncounty_impact/photo/ambulance-hits-car-in-tualatinjpg-728fae9120d32dd9.jpg"} />
      <Post author={"Sampson"} body={"Now that's a titty"} pic={"https://milwaukeerecord.com/wp-content/uploads/2018/07/HalfBaked.jpg"} />
      <Post author={"Brian"} body={"Don't Worry, I'm not gonna do what everybody thinks i'm gonna do"} pic={"https://i.imgflip.com/1vmwg1.jpg"} />

    </div>
  )
}

export default Posts;