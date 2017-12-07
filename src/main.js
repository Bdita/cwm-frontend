import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import './main.css';
import initUI from '../src/ui/init';

// redux setup
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const container = document.getElementById('root');

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
if (process.env.NODE_ENV !== 'development') {
  store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
}

initUI(store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
  , container
);

if (module.hot) {
  module.hot.accept('./app', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
      , container
    );
  });
}
