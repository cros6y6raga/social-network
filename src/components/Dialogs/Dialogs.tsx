import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogStringType = {
    name: string,
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='React' id='1'/>
                <DialogItem name='Angular' id='2'/>
                <DialogItem name='Vue' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='My name is react'/>
                <Message message='My name is angular'/>
                <Message message='My name is vue'/>
            </div>
        </div>
    );
};