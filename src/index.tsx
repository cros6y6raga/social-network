import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import StoreContext from "./StoreContext";

export let rerenderEntireTree = (state:any) => {

    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree(store.getState())

store.subscribe(()=> {
    let state=store.getState()
    rerenderEntireTree(state)})