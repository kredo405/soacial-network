import React from 'react';
import about from './css/about.module.css'



function About() {
  return (
    <div className={about.inform}>
        <div className = {about.name}>
            <h2>Александр крейдич</h2>
        </div>
        <div className = {about.about}>
            <h4>Дата рождения: </h4><p>30.04.1996</p>
            <h4>Семейное положение: </h4><p>Женат</p>
             <h4>Номер телефона: </h4><p>+375333280219</p>
             <h4>Web-сайт: </h4><p>http://richbecome.ru/</p>
        </div>
    </div>
  );
}

export default About;