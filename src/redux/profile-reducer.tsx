import React from 'react';
import {PostType} from "./state";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export const ProfileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.postText,
                likesCount: 0,
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText
            return state
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