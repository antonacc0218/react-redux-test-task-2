import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-less/semantic.less';
import { Provider } from 'react-redux';
import ErrorBoundary from 'components/ErrorBoundary';
import store from './store/configureStore';
import App from './App';
import './style.less';

render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
