import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descr
            </div>
        </div>
    );
};