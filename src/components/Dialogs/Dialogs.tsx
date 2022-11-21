import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogStringType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}
const DialogItem = (props: DialogStringType) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
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
    let messagesElement = messages.map(m => <DialogItem name={m.message} id={m.id}/>)
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