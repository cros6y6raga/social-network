import React from 'react';
import s from './Profile.module.css'

export  const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src='https://www.w3schools.com/w3css/img_lights.jpg'/></div>
            <div>
                ava+descr
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
};