import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Install if not already installed
import rootReducer from './Reducers'; // Create a separate file for reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
