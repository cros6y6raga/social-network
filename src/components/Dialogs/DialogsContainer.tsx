import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage
            let onSendMessageClick = () => {
                store.dispatch(sendMessageAC())
            }
            let onNewMessageChange = (body: any) => {
                store.dispatch(updateNewMessageAC(body))
            }
            return <Dialogs
                updateNewMessage={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            />
        }
        }
    </StoreContext.Consumer>
};