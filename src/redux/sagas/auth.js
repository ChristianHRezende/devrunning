import axios from "axios";
import { put } from "redux-saga/effects";
import jwtDecode from "jwt-decode";
import ActionCreators from "../actionCreators";

export function* login(action) {
  let token = localStorage.getItem("token");

  const login = yield axios.post("http://localhost:3001/users/login", {
    email: action.email,
    passwd: action.passwd
  });

  if (login.data.token) {
    token = login.data.token;
    localStorage.setItem("token", token);
    const user = jwtDecode(token);
    localStorage.setItem("user", user);
    yield put(ActionCreators.signinSuccess(user));
  } else {
    yield put(ActionCreators.signinFailure(login.data.message));
  }
}

export function* auth() {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const { data } = yield axios.get("http://localhost:3001/users/me", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      yield put(ActionCreators.authSuccess(data));
    } catch (err) {
      yield put(ActionCreators.authFailure("invalid token"));
    }
  } else yield put(ActionCreators.authFailure("no token"));
}

export function* destroyAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  yield put(ActionCreators.destroyAuthSuccess());
}

export function* updateProfile(action) {
  const token = localStorage.getItem("token");
  const user = yield axios.patch(
    `http://localhost:3001/users/${action.user.id}`,
    {
      ...action.user
    },
    {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  );

  yield put(
    ActionCreators.updateProfileSuccess({
      ...action.user
    })
  );
  console.log(user);
}
