import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessage: () => {
            dispatch(sendMessageAC())
        },
        sendMessage: (body: any) => {
            dispatch(updateNewMessageAC(body))
        }
    }
}

// @ts-ignore
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);