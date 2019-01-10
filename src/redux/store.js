import { createStore, combineReducers } from 'redux';

import appReducer from './reducers/appReducer';

const store = createStore(combineReducers({
  appReducer,
}));

export default store;
