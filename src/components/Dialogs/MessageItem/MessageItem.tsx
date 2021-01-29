import React from 'react'
import c from './MessageItem.module.css'
import {MessageItemType} from "../Dialogs";

const MessageItem = (props: MessageItemType) => {


    return (<div className={c.message}>{props.message.message}</div>
    )
}

export default MessageItem