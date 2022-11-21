import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogStringType = {
    name:string
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
    let dialogsData = [
        {id: 1, name: 'React'},
        {id: 2, name: 'Angular'},
        {id: 3, name: 'Vue'},
    ]
    let messagesData = [
        {id: 1, message: 'My name is react'},
        {id: 2, message: 'My name is angular'},
        {id: 3, message: 'My name is vue'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};