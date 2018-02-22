import { combineReducers } from 'redux';
import fetchAllSymbols from './test';

export default combineReducers({
    symbols: fetchAllSymbols,
})