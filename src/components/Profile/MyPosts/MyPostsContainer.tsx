import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostAC(store._state.profilePage.newPostText))
                    }
                    let onPostChange = (text: string) => {
                        let action = changeNewTextAC(text)
                        store.dispatch(action)
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