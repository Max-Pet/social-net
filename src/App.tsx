import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType} from "./redux/state";


type AppType = {
    state: StateType
    dispatch: (action: any) => void
}

function App(props: AppType) {
    const state = props.state
    const dialogs = state.dialogsPage.dialogs
    const messages = state.dialogsPage.messages
    const posts = state.profilePage.posts
    const newPostText = state.profilePage.newPostText

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className="App-wrapper-content">
                    <Route exact path='/dialogs' render={() => <Dialogs dialogs={dialogs}
                                                                        messages={messages}/>}/>
                    <Route exact path='/profile' render={() => <Profile posts={posts}
                                                                        dispatch={props.dispatch}
                                                                        newPostText={newPostText}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
