import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className={'header'}>
                <img src='https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg'/>
            </header>
            <nav className='nav'>
                <div>
                    <a href='#'>Profile</a>
                </div>
                <div>
                    <a href='#'>Messages</a>
                </div>
                <div>
                    <a href='#'>News</a>
                </div>
                <div>
                    <a href='#'>Music</a>
                </div>
                <div>
                    <a href='#'>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div><img src='https://www.w3schools.com/w3css/img_lights.jpg'/></div>
                <div>
                    ava+descr
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
