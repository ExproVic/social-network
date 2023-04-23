const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
            { message: 'yo sup' },

            ],
            newMessageBody: "yo"
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.updateNewPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this.state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.message.push({ id: 3, message: body });
            this._callSubscriber(this._state);
        }
    }

}
export const addPostActionCreator = () => {
    return ({
        type: ADD_POST
    })
}
export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })







export default store
window.state = store