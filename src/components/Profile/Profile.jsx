import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import InfoProfile from './InfoProfile/InfoProfile';

const Profile = () => {
  return (
    <div className={classes.content}>
      <InfoProfile />
      <MyPosts />
    </div>)
}
export default Profile