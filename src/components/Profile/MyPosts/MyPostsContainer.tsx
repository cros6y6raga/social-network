import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPostsContainer = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }
    let onPostChange = (text: string) => {
        let action = changeNewTextAC(text)
        props.dispatch(action)
    }
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={props.newPostText}/>
    );
};