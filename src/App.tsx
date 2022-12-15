import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, RootStateType, updateNewPostText} from "./redux/state";

type AppType = {
    state: RootStateType
    addPostCallback:(postMessage: string)=>void
    newPostText:string
    updateNewPostText:(newText: string)=>void
}
const App = (props: AppType) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPostCallback={props.addPostCallback} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </div>
            </div>
    );
}

export default App;