import React from 'react';
import dialogs from './css/dialogs.module.css';
import Dialog from './dialog/dialog';
import Messege from './messege/messege';





function Dialogs() {
  return (
    <div className ={dialogs.dialogs_page}>
        <div className= {dialogs.dialogs}>
          <div>
            <h2>Диалоги</h2>
          </div>
            <Dialog name = 'Татьяна Крейдич' id = '1' image = {require('./img/1.jpg')}/>
            <Dialog name = 'Елена Кривецкая' id = '2'  image = {require('./img/2.jpg')}/>
            <Dialog name = 'Инна Жук' id = '3'  image = {require('./img/3.jpg')}/>
            <Dialog name = 'Ирина Гузюк' id = '4'  image = {require('./img/4.jpg')}/>
            <Dialog name = 'Ольга Квачук' id = '5'  image = {require('./img/5.jpg')}/>
            <Dialog name = 'Леонид  Крейдич' id = '6'  image = {require('./img/6.jpg')}/>
            <Dialog name = 'Дмитрий Жук' id = '7'  image = {require('./img/7.jpg')}/>
        </div>
        <div className = {dialogs.messege}>
            <Messege messageImage = {require('./img/4.jpg')} status = 'Online' messageName = 'Ирина гузюк' messege = 'Привет как дела??'/>


        </div>
    </div>
  );
}

export default Dialogs;