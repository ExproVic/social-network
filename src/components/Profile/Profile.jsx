import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import InfoProfile from './InfoProfile/InfoProfile';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <InfoProfile />
      <MyPosts posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch} />
    </div>)
}
export default Profile