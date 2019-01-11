import { createStore, combineReducers, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';

import appReducer from './reducers/appReducer';
import restaurantsReducer from './reducers/restaurantsReducer';

const store = createStore(combineReducers({
  appReducer,
  restaurantsReducer,
}), applyMiddleware(promiseMiddleware()));

export default store;
