import React from 'react';
import messege from './sass/messege.module.scss';
import OneMessage from './oneMessage/oneMessage';
import { Button } from 'reactstrap';






function Messege(props) {

  let messageElement = props.messageData.map((el) => {
    return (<OneMessage image={el.image} text= {el.text} />);
  });

  return (
    <div>
      <div className={messege.messege}>
        <div className={messege.messege_header}>
          <div><img className={messege.message_avatar} src={props.messageImage} /> {props.messageName}</div>
          <div>{props.status}</div>
        </div>
        <div className={messege.correspondence}>
       {messageElement}
        </div>
        <div className = {messege.input_message}> 
        <div className={messege.input_group}>
  <textarea className={messege.input}></textarea>
  <Button className = {messege.btn_send} outline color="info">Отправить</Button>{' '}
</div>
        </div>
      </div>
    </div>
  );
}

export default Messege;