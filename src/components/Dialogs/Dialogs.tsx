import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {sendMessageAC} from "../../redux/dialogs-reducer";

type DialogStringType = {
    updateNewMessage: (body: any) => void
    sendMessage: () => void
    dialogsPage: any
}

export const Dialogs = (props: DialogStringType) => {
    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} key={d.id}
                                                                                             id={d.id}/>)
    let messagesElement = state.messages.map((m: { message: string; id: number; }) => <Message message={m.message}
                                                                                               key={m.id}
                                                                                               id={m.id}/>)
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        sendMessageAC()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessage(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};