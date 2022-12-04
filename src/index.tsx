import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {state} from "./redux/state";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

//addPost('SamuraiJS.com')

ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPostCallback={addPost} />
    </BrowserRouter>,
    document.getElementById('root')
);