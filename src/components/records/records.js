import React from 'react';
import record from './css/records.module.css'
import Recording from '../recording/recording';






function Records(props) {
  let recordingElement = props.recordingData.map((el) => {
    return (<Recording name = {el.name} id = {el.id} img ={el.img} status = {el.status} message = {el.message} />)
  })

  return (
    <div className={record.records}>
      {recordingElement}
    </div>
  );
}

export default Records;
