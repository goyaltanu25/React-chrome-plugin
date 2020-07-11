import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import LoginReducer from './Login/LoginReducer';
import SignupReducer from './Signup/SignupReducer';

const rootReducer = combineReducers({
    loginreducer: LoginReducer,
    signupReducer: SignupReducer
})
export const store = createStore(rootReducer, {}, applyMiddleware(thunk,logger));


