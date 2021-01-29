import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogType, MessageType} from "../../redux/state";


export type DialogItemType = {
    id: number;
    name: string;
}

export type MessageItemType = {
    message: MessageType

}

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

function Dialogs(props: DialogsPropsType) {


    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)


    let messagesElements = props.messages.map(el => <MessageItem message={el}/>)

    let newMessageElement:any=React.createRef()
    let addMessage = ()=>{
        let message=newMessageElement.current.value
        alert(message)}
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;