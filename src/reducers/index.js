import { combineReducers } from 'redux';
import LocaleReducer from './LocaleReducer'
import AuthReducer from './AuthReducer';

export default combineReducers({
    locale: LocaleReducer,
    auth: AuthReducer
});

 