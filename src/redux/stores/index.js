import { createStore, applyMiddleware } from 'redux'
import app from '../reducers/index'
import { createLogger } from 'redux-logger'
import reduxPromise from 'redux-promise-middleware';

const loggerMiddleware = createLogger();


let store = createStore(
    app,
    applyMiddleware(
        reduxPromise(),
        loggerMiddleware
    )
);
export default store;
