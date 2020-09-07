import React from 'react';
import dialogs from './css/dialogs.module.css';
import Dialog from './dialog/dialog';
import Messege from './messege/messege';





function Dialogs() {
  return (
    <div className ={dialogs.dialogs_page}>
        <div className= {dialogs.dialogs}>
            <Dialog name = 'Татьяна Крейдич' id = '1'/>
            <Dialog name = 'Елена Кривецкая' id = '2'/>
            <Dialog name = 'Инна Жук' id = '3'/>
            <Dialog name = 'Ирина Гузюк' id = '4'/>
            <Dialog name = 'Ольга Квачук' id = '5'/>
            <Dialog name = 'Леонид  Крейдич' id = '6'/>
            <Dialog name = 'Дмитрий Жук' id = '7'/>
        </div>
        <div className = {dialogs.messege}>
            <Messege messege = 'Привет как дела??'/>
            <Messege messege = 'Буудешь ехать на бронку???'/>
            <Messege messege = 'Что тебе сварить покушать??'/>

        </div>
    </div>
  );
}

export default Dialogs;