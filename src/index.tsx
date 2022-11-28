import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

export type PostType = {
    id: number
    message:string
    likesCount: string
}
let posts: PostType[] = [
    {id: 1, message: 'Hello', likesCount: '23'},
    {id: 2, message: 'Angular is the coolest', likesCount: '40'},
]
ReactDOM.render(
    <App posts={posts}/>,
  document.getElementById('root')
);