import { call, takeLatest, put, all } from "redux-saga/effects";
import { getCards } from "../services";
import { FetchJobsAction } from "../interfaces";
import { Creators as actionJobs } from "./duck";

function* fetchJobs(action: FetchJobsAction) {
  try {
    const response = yield call(getCards, action.description, action.location);
    yield put(actionJobs.addJobs(response.data));
  } catch (e) {
    console.error(e);
  }
}

function* mySaga() {
  yield all([takeLatest("JOBS_FETCH_REQUESTED", fetchJobs)]);
}

export default mySaga;
