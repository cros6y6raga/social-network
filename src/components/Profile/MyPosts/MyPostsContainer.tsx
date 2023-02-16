import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";
import {store} from "../../../redux/store";

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

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: any) => {
            let action = changeNewTextAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC(store._state.profilePage.newPostText))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);