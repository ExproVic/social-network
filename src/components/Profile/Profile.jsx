import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import InfoProfile from './InfoProfile/InfoProfile';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <InfoProfile />
      <MyPostsContainer />
    </div>)
}
export default Profile