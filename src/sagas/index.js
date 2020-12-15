import { all, takeEvery } from 'redux-saga/effects';
import { STORIES_FETCH } from '../constants/actionTypes';
import { handleFetchStories } from './Story';

function* watchAll() {
  yield all([
    takeEvery(STORIES_FETCH, handleFetchStories),
  ])
};

export default watchAll;
