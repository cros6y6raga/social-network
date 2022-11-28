import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export type PostType = {
    id: number
    message:string
    likesCount: string
}


export const Profile = () => {

    let posts: PostType[] = [
        {id: 1, message: 'Hello', likesCount: '23'},
        {id: 2, message: 'Angular is the coolest', likesCount: '40'},
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};