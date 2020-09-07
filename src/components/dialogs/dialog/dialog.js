import React from 'react';
import dialog from './css/dialog.module.css';
import { NavLink } from 'react-router-dom';





function Dialog(props) {
  return (
    <div>
        <div className= {dialog.dialog}>
  <NavLink to = {'dialog/' + props.id}>{props.name}</NavLink>
        </div>
    </div>
  );
}

export default Dialog;