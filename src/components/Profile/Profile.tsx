import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsProfile = {
    profilePage: ProfilePageType
    addPostCallback: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: PropsProfile) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPostCallback={props.addPostCallback}
                     newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};