import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state = {state}/>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
