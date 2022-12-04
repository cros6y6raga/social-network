import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsProfile = {
    state: ProfilePageType
    addPostCallback:(postMessage: string)=>void
}

export const Profile = (props: PropsProfile) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPostCallback={props.addPostCallback}/>
        </div>
    );
};