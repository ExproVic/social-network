import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        { id: 1, message: "nice ", like: 1 },
        { id: 2, message: "good ", like: 12 },
        { id: 3, message: "super " },
        { id: 4, message: "omg " },
        { id: 5, message: "gz bro" },
    ]
    return (
        <div className={classes.postsBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div ><button>Add post</button></div>
            </div>
            <div className={classes.posts}>

                <Post message={postData[0].message} like={postData[0].like} />

            </div>
        </div>

    )
}
export default MyPosts