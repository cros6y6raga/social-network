import React from 'react';


let onChange = () => {
    console.log('hello')
}

export const subscribe = (observer: () => void) => {
    onChange = observer
}

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


export let state: RootStateType = {
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
}
export let addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    onChange()
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    onChange()
}
