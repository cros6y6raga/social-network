import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

export type PostType = {
    id: number
    message:string
    likesCount: string
}
export type DialogsType={
    id: number
    name: string
}
export type MessagesType={
    id: number
    message: string
}
let posts: PostType[] = [
    {id: 1, message: 'Hello', likesCount: '23'},
    {id: 2, message: 'Angular is the coolest', likesCount: '40'},
]
let dialogs:DialogsType[] = [
    {id: 1, name: 'React'},
    {id: 2, name: 'Angular'},
    {id: 3, name: 'Vue'},
]
let messages:MessagesType[] = [
    {id: 1, message: 'My name is react'},
    {id: 2, message: 'My name is angular'},
    {id: 3, message: 'My name is vue'},
]
ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);