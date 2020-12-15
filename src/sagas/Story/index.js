import { call, put } from 'redux-saga/effects';
import { doAddStories, doFetchErrorStories } from '../../actions';
import { fetchStories } from '../../api';

function* handleFetchStories(action) {
  const { query } = action;

  try {
    const result = yield call(fetchStories, query);
    yield put(doAddStories(result.hits));
  } catch (error) {
    yield put(doFetchErrorStories(error))
  }
};

export {
  handleFetchStories,
};