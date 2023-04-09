import React from "react";
import classes from './InfoProfile.module.css';

const InfoProfile = (props) => {
    return (
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80' />
            </div>
            <div className={classes.descrioptionInfo}>
                ava+description
            </div>
        </div>


    )
}
export default InfoProfile