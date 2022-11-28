import React from 'react';
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

type DialogStringType = {
    name: string
    id: number
}

export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'React'},
        {id: 2, name: 'Angular'},
        {id: 3, name: 'Vue'},
    ]
    let messages = [
        {id: 1, message: 'My name is react'},
        {id: 2, message: 'My name is angular'},
        {id: 3, message: 'My name is vue'},
    ]
    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};