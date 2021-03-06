import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import vehicleSaga from './vehicleSaga';
import imageSaga from './imageSaga';
import orderSaga from './orderSaga';
import requestSaga from './requestSaga';
import commentSaga from './commentSaga';
import featureSaga from './featuresSaga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    vehicleSaga(),
    imageSaga(),
    orderSaga(),
    requestSaga(),
    commentSaga(),
    featureSaga(),
  ]);
}
