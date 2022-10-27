import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg'/>
            post1
            <div><span>like</span></div>
        </div>
    );
};