import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostType} from "./index";

type PropsApp={
    posts: PostType[]
}
const App = (props:PropsApp) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;