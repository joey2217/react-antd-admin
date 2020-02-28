import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import mock from "./mock";
if (process.env.NODE_ENV==='production') {
  mock()
}

ReactDOM.render(<App />, document.getElementById('root'));
