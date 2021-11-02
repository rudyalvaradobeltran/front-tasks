import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const initialState = {};
const enhancers = [applyMiddleware(...middlewares)];

export default function createTestStore() {
  return createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );
};