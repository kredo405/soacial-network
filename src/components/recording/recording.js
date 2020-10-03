import React from 'react';
import recording from './css/recording.module.css';



function Recording(props) {
  return (
    <div className={recording.recording}>
        <div className = "OneRecording">
          <img src = {props.img}/>
          <h2>
            {props.name}
          </h2>
  <p>{props.message}</p>
        </div>
    </div>
  );
}

export default Recording;