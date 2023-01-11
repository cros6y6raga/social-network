import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType, StoreType} from "./redux/state";

type AppType = {
    state: RootStateType
    addPostCallback: (postMessage: string) => void

    updateNewPostText: (newText: string) => void

}
const App = (props: AppType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              addPostCallback={props.addPostCallback}

                                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/news'/>
                <Route path='/music'/>
                <Route path='/settings'/>
            </div>
        </div>
    );
}

export default App;