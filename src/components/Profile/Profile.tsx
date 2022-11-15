import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export  const Profile = () => {
    return (
        <div>
            <div><img src='https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png'/></div>
            <div>
                ava+descr
            </div>
          <MyPosts/>
        </div>
    );
};