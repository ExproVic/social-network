import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';




const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />)
  let messagesElements = props.messagesData.map(message => <Message message={message.message} />)

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