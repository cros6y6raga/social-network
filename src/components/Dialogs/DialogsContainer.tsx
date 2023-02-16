import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

// export const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().dialogsPage
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageAC())
//             }
//             let onNewMessageChange = (body: any) => {
//                 store.dispatch(updateNewMessageAC(body))
//             }
//             return <Dialogs
//                 updateNewMessage={onNewMessageChange}
//                 sendMessage={onSendMessageClick}
//                 dialogsPage={state}
//             />
//         }
//         }
//     </StoreContext.Consumer>
// };

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessage: () => {
            dispatch(sendMessageAC())
        },
        sendMessage: (body: any) => {
            dispatch(updateNewMessageAC(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);