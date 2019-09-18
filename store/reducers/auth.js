import * as actionTypes from '../actions/actionTypes';
import { decode } from 'base-64';

const initialState = {
    username: null,
    userId: null,
    profileId: null,
    token: null,
    loading: false,
    message: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQ_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.REQ_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.REG_INIT:
            return {
                ...state,
                message: null
            };
        case actionTypes.REG_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.message
            };
        case actionTypes.LOGIN_SUCCESS:
            const payload = JSON.parse(decode(action.token.split(".")[1]));
            return {
                ...state,
                username: payload.username,
                userId: payload.user_id,
                profileId: payload.profileId,
                token: action.token,
                loading: false
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                username: null,
                userId: null,
                profileId: null,
                token: null
            };
        default:
            return state;
    }
};

export default reducer;