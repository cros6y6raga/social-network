import React from 'react';
import {PostType} from "./store";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 10},
        {id: 2, message: 'Angular is the coolest', likesCount: 20},
    ],
    newPostText: ''
}

export const ProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0,
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case CHANGE_NEW_TEXT: {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
};

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