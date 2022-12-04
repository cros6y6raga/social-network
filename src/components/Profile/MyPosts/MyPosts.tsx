import React, {LegacyRef, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type PropsType = {
    posts: PostType[]
    addPostCallback:(postMessage: string)=>void
}

export const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostEl = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
       // alert(newPostEl.current?.value)
        if (newPostEl.current){
            props.addPostCallback(newPostEl.current.value)
            newPostEl.current.value=''
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl}></textarea>
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