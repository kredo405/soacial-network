import React from 'react';
import './App.css';
import Header from './components/header/header';
import MyPage from './components/myPage/myPage';
import NavBar from './components/navBar/navBar';
import { Route } from 'react-router-dom';
import Dialogs from './components/dialogs/dialogs';





function App(props) {
  return (
    <div className="App">
      <Header/>
     <Route path='/MyPage' render ={() => <MyPage state ={props.state.profilePage}/>}/>
  <Route path='/Dialogs' render ={() => <Dialogs data = {props.state.messagesPage} />}/>
      <NavBar/>
    </div>
  );
}

export default App;
