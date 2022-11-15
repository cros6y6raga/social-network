import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string,
    likesCount: string,
}
export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'/>
            {props.message}
            <div>
                <span>like-</span>{props.likesCount}
            </div>
        </div>
    );
};