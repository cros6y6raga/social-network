import React from 'react';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
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
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    newMessageBody: string
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    // updateNewPostText: (newText: string) => void
    // addPost: (postText: string) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

// type AddPostActionType={
//     type:'ADD-POST'
//     postText:string
// }

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}

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
        },
        newMessageBody: ''
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
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._onChange()
    // },
    // addPost(postText: string) {
    //     const newPost: PostType = {
    //         id: new Date().getTime(),
    //         message: postText,
    //         likesCount: 0,
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._onChange()
    // },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._onChange()
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }
    },
}