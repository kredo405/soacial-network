import React from 'react';
import dialog from './css/dialog.module.css';
import { NavLink } from 'react-router-dom';





function Dialog(props) {
  return (
    <div>
        <div className= {dialog.dialog}>
  <NavLink className = {dialog.one_dialog} to = {'dialog/' + props.id}><img src ={props.image} className= {dialog.avatar_dialog}/>{props.name}</NavLink>
        </div>
    </div>
  );
}

export default Dialog;