import React from 'react';
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

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
    return <StoreContext.Consumer>
        {(store) => {
            return <Dialogs
                updateNewMessage={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            />
        }
        }
    </StoreContext.Consumer>
};