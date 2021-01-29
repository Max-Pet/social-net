import React from 'react';
import c from './Post.module.css';

type PropsType = {
    message: string;
    likesCount: number;
}

function Post(props: PropsType) {
    return (
        <div className={c.item}>
            <img
                src='https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
            <div>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default Post