let store = {
    _state: {

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



    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subcribe(observe) {
        this._callSubscriber = observe;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.updateNewPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.updateNewPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}





export default store
window.state = store