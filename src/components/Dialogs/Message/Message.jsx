import React from 'react';
import classes from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
  let newMessege = React.createRef();
  let send = () => {
    let text = newMessege.current.value;
    alert(text);
  }
  return (
    <div className={classes.dialog}>
      <NavLink to='message'>{props.message}  <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" /></NavLink>
      <textarea className={classes.size} ref={newMessege}></textarea>
      <button onClick={send}>send</button>
    </div>
  )
}


export default Message