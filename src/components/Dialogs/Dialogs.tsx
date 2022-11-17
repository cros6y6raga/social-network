import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>React</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Angular</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Vue</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>My name is react</div>
                <div className={s.message}>My name is angular</div>
                <div className={s.message}>My name is vue</div>
            </div>
        </div>
    );
};