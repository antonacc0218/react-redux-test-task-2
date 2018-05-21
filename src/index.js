import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-less/semantic.less';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';
import './style.less';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
