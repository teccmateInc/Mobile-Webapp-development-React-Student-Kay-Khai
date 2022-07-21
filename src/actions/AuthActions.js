import history from '../config/history';
import { LOCALES } from '../config/i18n';
import {
    login as serviceLogin,
    autologin as serviceAutologin,
    logout as serviceLogout,
} from '../apis/AuthService';

import {
    SET_LOCALE,
    LOGOUT
} from './types';
// import { fetchEventAttendee } from './AttendeeActions';


export const login = (token) => async (dispatch) => {
    console.log("token: " + token);
    return await serviceLogin(token)
        .then(
            response => {
                localStorage.setItem("token", response.accessToken);
                console.log("response.accessToken: " + response.accessToken);
                // dispatch(success({ "message": "new login" }));
                // setTokenHeader(response.accessToken);
                // dispatch(success({ name: response.name, type: response.type }));

                // dispatch(fetchEventAttendee());
            },
            error => {
                return { "error": error.response.data.errors };
            }
        );
    // function success(user) { return { type: LOGIN_SUCCESS, user } }
}

export const autologin = () => async (dispatch) => {
    const autologin = serviceAutologin();
    if (autologin) {
        autologin.then(
            response => {
                if (response && response.accessToken) {
                    localStorage.setItem("token", response.accessToken);
                    // setTokenHeader(response.accessToken);
                    // dispatch(success({ name: response.name, type: response.type }));

                    // dispatch(fetchEventAttendee());
                }
                else {
                    localStorage.removeItem("token");
                }
            },
            error => {
                localStorage.removeItem("token");
            }
        );
    }

    // function success(user) { return { type: LOGIN_SUCCESS, user } }
};

export const logout = () => async (dispatch, getState) => {
    serviceLogout();
    localStorage.removeItem("token");

    dispatch({
        type: LOGOUT
    });

    history.push('/');
};

export const setLocale = (locale) => {
    return {
        type: SET_LOCALE,
        payload: locale
    }
};
