import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElement =
        props.posts.map(p => <Post message={p.message} like={p.like} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className={classes.postsBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div ><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={classes.posts}>

                {postsElement}

            </div>
        </div>

    )
}
export default MyPosts