import React from 'react';
import record from './css/records.module.css'
import Recording from '../recording/recording';




function Records() {
  return (
    <div className={record.records}>
    <Recording/> 
    <Recording/>
    </div>
  );
}

export default Records;
