import axios from "axios";
import ActionsCreators from "../actionCreators";
import { put } from "redux-saga/effects";

export function* getRuns() {
  const token = localStorage.getItem("token");
  const runs = yield axios.get("http://localhost:3001/runs", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  yield put(ActionsCreators.getRunsSuccess(runs.data.data));
}

export function* createRun(action) {
  const token = localStorage.getItem("token");
  const run = yield axios.post("http://localhost:3001/runs", action.run, {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  //yield put(ActionsCreators.getRunsSuccess(runs.data));
}
