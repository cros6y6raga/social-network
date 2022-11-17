import React from 'react';
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    React
                </div>
                <div className={s.dialog}>
                    Angular
                </div>
                <div className={s.dialog}>
                    Vue
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