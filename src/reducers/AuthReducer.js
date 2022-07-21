import { LOGOUT, LOGIN_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    isLogin: false
};

const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === LOGIN_SUCCESS) {
        return { ...state, isLogin: true, toUpdate: false };
    }
    else if (action.type === LOGOUT) {
        return { isLogin: false };
    }

    return state;
}

export default reducer;