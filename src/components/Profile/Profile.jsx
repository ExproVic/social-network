import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import InfoProfile from './InfoProfile/InfoProfile';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <InfoProfile />
      <MyPosts posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText} />
    </div>)
}
export default Profile