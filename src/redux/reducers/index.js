import { combineReducers } from 'redux';
import {
  saveReducer,
  listReducer,
  getByIdReducer,
  removeByIdReducer,
} from '../reducers/tasks.reducer';

export default combineReducers({
  saveState: saveReducer,
  listState: listReducer,
  getByIdState: getByIdReducer,
  removeByIdState: removeByIdReducer,
});