import React from 'react';
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../index";

type DialogStringType = {
    dialogs:DialogsType[]
    messages:MessagesType[]
}

export const Dialogs = (props:DialogStringType) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message message={m.message} id={m.id}/>)
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