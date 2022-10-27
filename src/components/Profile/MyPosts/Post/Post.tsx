import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string,
    likesCount: string,
}
export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg'/>
            {props.message}
            <div>
                <span>like-</span>{props.likesCount}
            </div>
        </div>
    );
};