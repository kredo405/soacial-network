import React from 'react';
import messege from './css/messege.module.css';






function Messege(props) {
  return (
    <div>
        <div className= {messege.messege}>
                {props.messege}
        </div>
    </div>
  );
}

export default Messege;