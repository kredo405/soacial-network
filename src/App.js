import React from 'react';
import './App.css';
import Header from './components/header/header';
import MyPage from './components/myPage/myPage';
import NavBar from './components/navBar/navBar';
import { Route } from 'react-router-dom';
import Dialogs from './components/dialogs/dialogs';






function App() {
  return (
    <div className="App">
      <Header/>
     <Route path='/MyPage' component ={MyPage}/>
     <Route path='/Dialogs' component = {Dialogs}/>
      <NavBar/>
    </div>
  );
}

export default App;
