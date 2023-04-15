import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <nav className={classes.nav}>
    <div>

      <NavLink to='/profile' className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/dialogs' className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/news' className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/setting' className={navData => navData.isActive ? classes.active : classes.item}>Setting</NavLink>
    </div>
    <div className={classes.BestFriends}> BestFriend
      <div className={classes.friends}>
        <NavLink> <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" />Vova </NavLink>
      </div>
      <div className={classes.friends}>
        <NavLink>  <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" />Antoni</NavLink>
      </div>
      <div className={classes.friends}>
        <NavLink> <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" /> Emeli </NavLink>
      </div></div>
  </nav>


}
export default Navbar