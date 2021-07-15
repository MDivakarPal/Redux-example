import {createStore} from 'redux'
import {firstReducer} from './root.reducer';

const Store=createStore(firstReducer);

export {Store}