import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + '' + classes.active}>Victor</div>
        <div className={classes.dialog}>Malia</div>
        <div className={classes.dialog}>Taya</div>
        <div className={classes.dialog}>Antonia</div>
        <div className={classes.dialog}>Melisa</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hello everybody</div>
        <div className={classes.message}>yo sup</div>
        <div className={classes.message}> okay</div>
      </div>
    </div>
  )
}
export default Dialogs