import { createStore } from 'redux';
import storyReducer from '../reducers';

const store = createStore(storyReducer); 

export default store; 