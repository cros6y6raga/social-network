import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PropsType = {
    store: any
}

export const MyPostsContainer = (props: PropsType) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = props.store.getState()
                    const addPost = () => {
                        props.store.dispatch(addPostAC(props.store.newPostText))
                    }
                    let onPostChange = (text: string) => {
                        let action = changeNewTextAC(text)
                        props.store.dispatch(action)
                    }
                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        newPostText={state.profilePage.newPostText}
                        posts={state.profilePage.posts}/>
                }
            }
        </StoreContext.Consumer>
    );
};