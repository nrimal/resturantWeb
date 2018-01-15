import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Component/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render((
    <BrowserRouter>
    <App />
</BrowserRouter>)
, document.getElementById('root'))
registerServiceWorker();
