import React, {ChangeEvent, LegacyRef, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";

type PropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        //props.addPostCallback(props.newPostText)
        props.dispatch(addPostAC(props.newPostText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = changeNewTextAC(e.currentTarget.value)
        props.dispatch(action)
        // props.dispatch({type: 'CHANGE-NEW-TEXT', newText: e.currentTarget.value})
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};