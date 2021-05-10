import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/all.css'
import App from './App';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store/store';

import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
