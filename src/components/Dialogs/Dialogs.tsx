import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesPageType, sendMessageAC, store, updateNewMessageAC} from "../../redux/state";

type DialogStringType = {
    state: MessagesPageType
}

export const Dialogs = (props: DialogStringType) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.state.newMessageBody
    let onSendMessageClick = () => {
        store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        store.dispatch(updateNewMessageAC(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};