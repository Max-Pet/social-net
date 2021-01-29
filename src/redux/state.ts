import {rerenderEntireTree} from "../render";

export type MessageType = {
    id: number,
    message: string,
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number,
    post: string,
    likesCount: number,
}
type ProfilePageType = {
    posts:Array<PostType>,
    newPostText:string,
}
type DialogPageType = {
    messages:Array<MessageType>,
    dialogs:Array<DialogType>
}
export type RootStateType = {
    profilePage:ProfilePageType,
    dialogsPage:DialogPageType
}


let state:RootStateType={
    profilePage:{
        posts:[
            {id: 1, post: 'Hi!', likesCount: 0},
            {id: 2, post: 'Yoyo!', likesCount: 20}
        ],
        newPostText:'',
    },
    dialogsPage:{
        dialogs:[
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Valera'}
        ],
        messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo!'},
            {id: 3, message: 'bzz'}
        ]
    }
}

export const addPost=(postMessage:string)=>{
    let newPost:PostType={
        id:5,
        post:postMessage,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText=(newText:string)=>{
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}

export default state;