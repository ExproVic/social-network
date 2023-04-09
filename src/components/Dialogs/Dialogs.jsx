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
let dialogs = [
  { id: 1, name: "Victor" },
  { id: 2, name: "Maila" },
  { id: 3, name: "John" },
  { id: 4, name: "Josua" },
  { id: 5, name: "Lora" },
]

let messagesData = [
  { message: 'Hello everybody' },
  { message: 'yo sup' },
]
let dialogsElements = dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />)
let messagesElements = messagesData.map(message => <Message message={message.message} />)

const Dialogs = (props) => {


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}
export default Dialogs