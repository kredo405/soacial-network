import React from 'react';
import myPage from './css/myPage.module.css';
import Posts from '../posts/posts';
import Records from '../records/records';




function MyPage(props) {
   
  return (
  <div className ={myPage.MyPage}>
     <div className = {myPage.avatar_fon}>
     <div className = {myPage.fon}>
      <img className = {myPage.avatar} src = {require('./img/avatar.png')}/>
      <h3>Александр Крейдич</h3><p>@Web-deweloper</p>
     </div>
 
    </div>
    <div className = {myPage.posts}>
      <Posts/>
    </div>
    <div className = {myPage.records}>
    <Records recordingData = {props.state.recordingData}/>
    </div>
  </div>
  );
}

export default MyPage;