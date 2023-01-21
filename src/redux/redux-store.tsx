import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

export let store = createStore(reducers)