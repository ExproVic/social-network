const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [{ id: 1, name: "Victor" },
    { id: 2, name: "Maila" },
    { id: 3, name: "John" },
    { id: 4, name: "Josua" },
    { id: 5, name: "Lora" },],
    messagesData: [{ message: 'Hello everybody' },
    { message: 'yo sup' },

    ],
    newMessageBody: "yo"
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 3, message: body });
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer