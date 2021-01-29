import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType, updateNewPostText} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>,
    addPost: (postMessage: string) => void,
    newPostText:string,
    updateNewText:(newText:string)=>void
}

function MyPosts(props: MyPostsPropsType) {

    let postElements = props.posts.map(el => <Post message={el.post} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            let message = newPostElement.current.value
            props.addPost(message)
            props.updateNewText('')
        }
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewText(text)
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