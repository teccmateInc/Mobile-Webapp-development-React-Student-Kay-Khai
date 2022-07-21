import axios from "axios";

const { REACT_APP_API_BASE_URL } = process.env;

const API_URL = `${REACT_APP_API_BASE_URL}/v1/test`;

export const test = () => {
    console.log('test test');
}

export const login = (token) => {
    return axios
        .post(API_URL + "/", {
            token
        })
        .then(response => {
            return response.data;
        });
}