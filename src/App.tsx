import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, RootStateType, store, StoreType} from "./redux/store";

type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const App = (props: AppType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <Dialogs store={props.store} state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path='/news'/>
                <Route path='/music'/>
                <Route path='/settings'/>
            </div>
        </div>
    );
}

export default App;