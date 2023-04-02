import React from 'react';
import classes from'./Profile.module.css';

const Profile = () => {
  return (
  <div className={classes.content}>
    <div>
        <img src='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80'/>        
          </div>
          <div>
              ava+description
          </div>
          <div>
              my posts
              <div>
                  new posts
              </div>
              <div>
                  <div>post 1</div>
                  <div>post 2</div>
                  <div>post 3</div>
                  <div>post 4</div>
              </div>
          </div>
  </div>)
}
export default Profile