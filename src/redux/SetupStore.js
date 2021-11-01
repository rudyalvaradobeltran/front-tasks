import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function setupStore() {
  let composeEnhancers = compose;
  let middlewares;

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  if (process.env.REACT_APP_DISABLE_REDUX_LOGGER !== 'true') {
    const { createLogger } = require('redux-logger');

    const logger = createLogger({
      duration: true,
      timestamp: true,
      diff: true,
      collapsed: (getState, action, logEntry) => !logEntry.error,
    });

    middlewares = [thunk, logger];
  } else {
    middlewares = [thunk];
  }

  const initialState = {};
  const enhancers = [applyMiddleware(...middlewares)];
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  );
}