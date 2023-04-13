import React from 'react';
import classes from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to='message'>{props.message}</NavLink>
    </div>
  )
}


export default Message