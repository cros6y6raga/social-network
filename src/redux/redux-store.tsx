import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

export const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    users: usersReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)