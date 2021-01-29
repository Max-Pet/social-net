import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from "./redux/state";


type AppType = {
    state: RootStateType,
    addPost:(postMessage:string)=>void,
    updateNewText:(postMessage:string)=>void
}

function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className="App-wrapper-content">
                    <Route exact path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                        messages={props.state.dialogsPage.messages}/>}/>
                    <Route exact path='/profile' render={() => <Profile posts={props.state.profilePage.posts}
                                                                        addPost={props.addPost}
                                                                        newPostText={props.state.profilePage.newPostText}
                                                                        updateNewText={props.updateNewText}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
