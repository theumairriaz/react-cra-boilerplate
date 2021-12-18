import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import reducers from 'redux/reducers';
import rootSaga from 'redux/sagas';

const history = require('history').createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];

const store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);
export { store, history };
