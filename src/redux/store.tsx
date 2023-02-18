import React from 'react';
import {addPostAC, changeNewTextAC, ProfileReducer} from "./profile-reducer";
import {DialogsReducer, sendMessageAC, updateNewMessageAC} from "./dialogs-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

 type DialogsType = {
    id: number
    name: string
}

 type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type MessagesPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof updateNewMessageAC> |
    ReturnType<typeof sendMessageAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 10},
                {id: 2, message: 'Angular is the coolest', likesCount: 20},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'React'},
                {id: 2, name: 'Angular'},
                {id: 3, name: 'Vue'},
            ],
            messages: [
                {id: 1, message: 'My name is react'},
                {id: 2, message: 'My name is angular'},
                {id: 3, message: 'My name is vue'},
            ],
            newMessageBody: ''
        },
    },
    _onChange() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._onChange = callback
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._onChange()
    },
}