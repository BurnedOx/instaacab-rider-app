import * as actionTypes from './actionTypes';
import Axios from "../../Axios";
import { AsyncStorage } from "react-native";
import { decode } from 'base-64';

export const reqStart = () => {
    return {
        type: actionTypes.REQ_START
    }
};

export const reqFail = (error) => {
    alert(error)
    return {
        type: actionTypes.REQ_FAIL
    }
};

export const regInit = () => {
    return {
        type: actionTypes.REG_INIT
    }
};

export const regSuccess = (message) => {
    return {
        type: actionTypes.REG_SUCCESS,
        message: message
    }
};

export const loginSuccess = (token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token
    }
};

export const storeToken = (token) => {
    return dispatch => {
        dispatch(loginSuccess(token));
        const expDate = new Date(parseInt(JSON.parse(decode(token.split(".")[1])).exp) * 1000);
        AsyncStorage.setItem("instaacab:token", token);
        AsyncStorage.setItem("instaacab:tokenExp", expDate.toString());
    };
};

export const logout = () => {
    AsyncStorage.removeItem("instaacab:token");
    AsyncStorage.removeItem("instaacab:tokenExp");
    return {
        type: actionTypes.LOGOUT
    };
};

export const register = (data) => {
    return dispatch => {
        dispatch(reqStart());
        Axios.post('/accounts/register/', data).then(
            res => {
                Axios.post('/rider/add-group/', { username: res.data.username }).then(
                    res => {
                        if (res.data) {
                            dispatch(regSuccess('Registered'));
                        }
                    }
                ).catch(err => dispatch(reqFail(err.message)));
            }
        ).catch(err => dispatch(reqFail(err.message)))
    };
};

export const login = (data) => {
    return dispatch => {
        dispatch(reqStart());
        Axios.post('/token/', data).then(
            res => {
                if (JSON.parse(decode(res.data.access.split(".")[1])).type !== 'rider') {
                    throw new Error('Login only as a rider');
                } else {
                    dispatch(storeToken(res.data.access));
                }
            }
        ).catch(err => dispatch(reqFail(err.message)));
    }
};

export const autoGetToken = () => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            if (!token) {
                AsyncStorage.getItem("instaacab:token")
                    .catch(err => reject())
                    .then(tokenFromStorage => {
                        if (!tokenFromStorage) {
                            reject();
                            return;
                        }
                        AsyncStorage.getItem("instaacab:tokenExp")
                            .then(expiryDate => {
                                const parsedExpiryDate = Date.parse(expiryDate);
                                const now = new Date();
                                if (parsedExpiryDate > now) {
                                    dispatch(loginSuccess(tokenFromStorage));
                                    resolve(tokenFromStorage);
                                } else {
                                    reject();
                                }
                            })
                            .catch(err => reject());
                    })
            } else {
                resolve(token);
            }
        });
    };
};