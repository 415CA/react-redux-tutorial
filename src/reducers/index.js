import storyReducer from './Story';
import archiveReducer from './Archive';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  storyState: storyReducer,
  archiveState: archiveReducer,
});

export default rootReducer;