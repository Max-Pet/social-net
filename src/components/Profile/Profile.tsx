import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";


type ProfilePropsType = {
    posts: Array<PostType>,
    addPost:(postMessage:string)=>void,
    newPostText:string,
    updateNewText:(postMessage:string)=>void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewText={props.updateNewText}
                />
        </div>
    )
}

export default Profile;