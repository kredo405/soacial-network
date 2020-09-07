import React from 'react';
import myPage from './css/myPage.module.css';
import About from './about/about';
import Posts from '../posts/posts';
import Records from '../records/records';

function MyPage() {
   
  return (
  <div className ={myPage.MyPage}>
     <div className = {myPage.avatar_fon}>
     <div className = {myPage.fon}>
      <img className = {myPage.avatar} src = {require('./img/avatar.png')}/>
     </div>
    <div className = {myPage.about}>
    <About/>
    </div>
    </div>
    <div className = {myPage.posts}>
      <Posts/>
    </div>
    <div className = {myPage.records}>
    <Records/>
    </div>
  </div>
  );
}

export default MyPage;