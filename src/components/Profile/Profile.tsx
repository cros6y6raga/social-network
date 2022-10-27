import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export  const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src='https://www.w3schools.com/w3css/img_lights.jpg'/></div>
            <div>
                ava+descr
            </div>
          <MyPosts/>
        </div>
    );
};