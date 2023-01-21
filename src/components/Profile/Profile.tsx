import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsProfile = {

    store: any
}

export const Profile = (props: PropsProfile) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                // posts={props.profilePage.posts}
                // dispatch={props.dispatch}
                // newPostText={props.profilePage.newPostText}
            />
        </div>
    );
};