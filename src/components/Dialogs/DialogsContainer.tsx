import React from 'react';
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogStringType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogStringType) => {
    let state = props.store.getState().dialogsPage
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageAC(body))
    }
    return (<Dialogs
        updateNewMessage={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state}
    />);
};