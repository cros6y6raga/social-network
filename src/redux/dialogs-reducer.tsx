import React from 'react';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}


let initialState = {
    dialogs: [
        {id: 1, name: 'React'},
        {id: 2, name: 'Angular'},
        {id: 3, name: 'Vue'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'My name is react'},
        {id: 2, message: 'My name is angular'},
        {id: 3, message: 'My name is vue'},
    ] as Array<MessagesType>,
    newMessageBody: ''
}

export type InitialStateType = typeof initialState



export const DialogsReducer = (state:InitialStateType = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ''
            state.messages.push({id: 3, message: body});
            return state;
        default:
            return state
    }
};

export const updateNewMessageAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}