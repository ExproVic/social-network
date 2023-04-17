import { rerenderEntireTree } from "../render";

let state = {

    profilePage: {
        posts: [{ id: 1, message: "nice ", like: 1 },
        { id: 2, message: "good ", like: 12 },
        { id: 3, message: "super " },
        { id: 4, message: "omg " },
        { id: 5, message: "gz bro" },],
        newPostText: 'Ad astra'
    },
    dialogsPage: {
        dialogs: [{ id: 1, name: "Victor" },
        { id: 2, name: "Maila" },
        { id: 3, name: "John" },
        { id: 4, name: "Josua" },
        { id: 5, name: "Lora" },],
        messagesData: [{ message: 'Hello everybody' },
        { message: 'yo sup' },]
    }



}
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0,
    }
    state.profilePage.posts.push(newPost);
    state.updateNewPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}
export default state