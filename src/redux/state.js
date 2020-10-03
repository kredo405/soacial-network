let state = {

  messagesPage: {
    messageData: [
      {image: `${require('../img/1.jpg')}`, text: 'Привет как дела??'},
      {image: `${require('../img/avatar.png')}`, text: 'Привет, норм, ты как???'}
    ],
  messagesData: [
      {status: 'Online', messageName: 'Татьяна Крейдич', messageImage: `${require('../img/1.jpg')}`}
    ],
  dialogData:  [
      { name: 'Татьяна Крейдич', id: '1', image: `${require('../img/1.jpg')}` },
      { name: 'Елена Кривецкая', id: '2', image: `${require('../img/2.jpg')}` },
      { name: 'Инна Жук', id: '3', image: `${require('../img/3.jpg')}` }
    ]  
  },
  profilePage: {
    recordingData: [
      {name: 'Татьяна крейдич', id: 1, img: `${require('../img/1.jpg')}`, status: 'Online', message: 'Привет'},
      {name: 'Ирина Гузюк', id: 2, img: `${require('../img/1.jpg')}`, status: 'Online',  message: 'Привет, как дела???'}
    ],
  }
}

export default state;