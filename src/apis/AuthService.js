import axios from "axios";

const { REACT_APP_API_BASE_URL } = process.env;

const API_URL = `${REACT_APP_API_BASE_URL}/v1/auth`;

export const login = (token) => {
    return axios
        .post(API_URL + "/", {
            token
        })
        .then(response => {
            return response.data;
        });
}

export const autologin = () => {
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
        return axios
            .post(API_URL + "/auto", {
                accessToken
            })
            .then(
                response => {
                    return response.data;
                },
                error => {
                    localStorage.removeItem("token");
                }
            );
    }
}

export const logout = () => {
    localStorage.removeItem("token");
}
