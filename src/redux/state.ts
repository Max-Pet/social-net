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
    posts: Array<PostType>,
    newPostText: string,
}
type DialogPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType
}
export type StoreType = {
    _state: StateType
    /*updateNewPostText: (newText: string) => void*/
    /*addPost: (postMessage: string) => void*/
    _rerender: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType)=> void
}
type AddPostActionType ={
    type:'ADD-POST'
}
type UpdateNewPostTextType = {
    type:'Update-NEW-POST-TEXT'
    newText:string
}

export type ActionsType = AddPostActionType|UpdateNewPostTextType
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi!', likesCount: 0},
                {id: 2, post: 'Yo!', likesCount: 20}
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Mc'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sv'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo!'},
                {id: 3, message: 'bzz'}
            ]
        }
    },
    _rerender() {
    },

    getState() {
        return (
            this._state
        )
    },
    subscribe(observer: () => void) {
        this._rerender = observer
    },



    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerender()
        }
        else if (action.type === 'Update-NEW-POST-TEXT'){this._state.profilePage.newPostText = action.newText
            this._rerender()}}
}