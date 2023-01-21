import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type PropsType = {
    posts: PostType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    const onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        // @ts-ignore
        props.newPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};