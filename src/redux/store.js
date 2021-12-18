import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import thunk from 'redux-thunk';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const store = createStore(combineReducers({ ...reducers }), applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export { store };
