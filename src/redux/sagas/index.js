import { takeLatest, put, all } from "redux-saga/effects";

import { Types } from "../actionCreators";
import ActionCreators from "../actionCreators";
import { auth, login } from "./auth";
import { getRuns, createRun } from "./runs";

export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login),
    takeLatest(Types.AUTH_REQUEST, auth),
    takeLatest(Types.GET_RUNS_REQUEST, getRuns),
    takeLatest(Types.CREATE_RUN_REQUEST, createRun),
    put(ActionCreators.authRequest())
  ]);
}
