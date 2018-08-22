import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import AppRedux from './AppRedux';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <AppRedux />
  </Provider>,
  document.getElementById('root'),
);
