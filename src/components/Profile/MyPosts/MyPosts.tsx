import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/state";

/*let addPostActionCreator = () => {
    return{
        type:'ADD-POST'
    }
}

let updateNewPostText = () => {
    return{
        type: 'Update-NEW-POST-TEXT', newText: text
    }
}*/

type MyPostsPropsType = {
    posts: Array<PostType>,
    newPostText: string,
    dispatch: (action: ActionsType) => void
}
function MyPosts(props: MyPostsPropsType) {
    let postElements = props.posts.map(el => <Post message={el.post} likesCount={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch({type: 'ADD-POST'})
        }
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch({type: 'Update-NEW-POST-TEXT', newText: text})
        }
    }
    return (
        <div className={c.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>
                    Add post
                </button>
            </div>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts