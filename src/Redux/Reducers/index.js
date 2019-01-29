import { combineReducers } from 'redux';
import userReducer from './userReducer';
import socketReducer from './socketReducer';
import chatReducer from './chatReducer';


const rootReducer = combineReducers({
    userReducer,
    socketReducer,
    chatReducer,
});

export default rootReducer;