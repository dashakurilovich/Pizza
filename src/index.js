import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

store.dispatch({
  type: 'SET_SORT_BY',
  payload: 'price'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
