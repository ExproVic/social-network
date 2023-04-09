import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + '' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div >
  )
}

const Message = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to='message'>{props.message}</NavLink>
    </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogsItem name="Victor" id="1" />
        <DialogsItem name="Malia" id="2" />
        <DialogsItem name="Taya" id="3" />
        <DialogsItem name="Antonia" id="4" />
        <DialogsItem name="Melisa" id="5" />
      </div>
      <div className={classes.messages}>
        <Message message='Hello everybody' />
        <Message message='yo sup' />
        <Message message='Hkayi' />
      </div>
    </div>
  )
}
export default Dialogs