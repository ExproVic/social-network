import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            My Posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div ><button>Add post</button></div>
            </div>
            <div className={classes.posts}>

                <Post message='15' />

            </div>
        </div>

    )
}
export default MyPosts