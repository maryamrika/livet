/* eslint react/jsx-filename-extension: "off", import/first: "off" */
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
import App from './App';


ReactDOM.render((
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
