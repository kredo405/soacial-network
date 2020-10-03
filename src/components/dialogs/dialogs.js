import React from 'react';
import dialogs from './css/dialogs.module.css';
import Dialog from './dialog/dialog'
import Messege from './messege/messege';






function Dialogs(props) {

  let dialogsElement = props.data.dialogData.map((el) => {
  return (<Dialog name = {el.name} id = {el.id} image ={el.image} />)
})

let messagesElement = props.data.messagesData.map((el) => {
  return (
    <Messege messageData = {props.data.messageData} messageName = {el.messageName} status= {el.status} messageImage= {el.messageImage} />
  )
})
  return (
    <div className={dialogs.dialogs_page}>
      <div className={dialogs.dialogs}>
        <div>
          <h2>Диалоги</h2>
        </div>
        {dialogsElement}
      </div>
      <div className={dialogs.messege}>
       {messagesElement}
      </div>
    </div>
  );
}

export default Dialogs;