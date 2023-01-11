import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {RootStateType, StoreType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";

//addPost('SamuraiJS.com')
type PropsType={
    store:StoreType
}

export let rerenderEntireTree = ( ) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPostCallback={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree()

store.subscribe( rerenderEntireTree)