import React from 'react';
import c from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {DialogItemType} from '../Dialogs';


const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem