import React from 'react';

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
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postText: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
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
            ]
        }
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange()
    },
    _onChange() {
        console.log('state changed')
    },

    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    }
}