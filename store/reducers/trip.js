import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pricing: [
        { type: "basic", base: 40, rate: 10 },
        { type: "premium", base: 55, rate: 13 },
        { type: "suv", base: 65, rate: 16 }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default reducer;