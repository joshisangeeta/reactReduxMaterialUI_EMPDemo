import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import getAppStore from './store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const store = createStore(applyMiddleware(thunk));

const store = getAppStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

