import { all, takeLatest } from 'redux-saga/effects';

import { Types as MapTypes } from '../ducks/map';
import { addPosition } from './map';

export default function* rootSaga() {
  return yield all([takeLatest(MapTypes.ADD_POSITION_REQUEST, addPosition)]);
}
