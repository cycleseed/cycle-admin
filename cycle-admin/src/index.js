import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import {BrowserRouter} from 'react-router-dom'; 

const  WithRouter = () => {
  return (
    <BrowserRouter><App/></BrowserRouter>
  )
}

ReactDOM.render(<WithRouter/>, document.getElementById('root'));
serviceWorker.unregister();



