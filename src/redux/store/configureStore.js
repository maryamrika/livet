/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';

const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  const initState = initialState;
  return createStore(rootReducer, initState,
    composeEnhancers(applyMiddleware(...middleware, thunk, reduxImmutableStateInvariant())));
}
