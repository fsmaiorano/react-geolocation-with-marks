import { call, put, select } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.search}`);
    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure('Usuário duplicado'));
    } else {
      const user = {
        id: data.id,
        name: data.name,
        avatar: data.avatar_url,
      };
      yield put(UserActions.addUserSuccess(user));
    }
  } catch (err) {
    yield put(UserActions.addUserFailure('Erro ao adicionar usuário'));
  }
}
