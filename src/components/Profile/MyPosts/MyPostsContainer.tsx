import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {store} from "../../../redux/store";

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

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);