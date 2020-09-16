import React from 'react';
import oneMessage from './css/oneMessage.module.css';






function OneMessage(props) {
  return (
    <div className = {oneMessage.one_message}>
     <div> <img className = {oneMessage.image_message} src = {props.image}/><span className = {oneMessage.message_text}>{props.text}</span></div>
  
    </div>
  );
}

export default OneMessage;