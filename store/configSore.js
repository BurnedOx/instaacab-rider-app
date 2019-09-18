import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from "./reducers/auth";
import tripReducer from "./reducers/trip";

const rootReducers = combineReducers({
    auth: authReducer,
    trip: tripReducer
});

const configStore = () => {
    return createStore(rootReducers, applyMiddleware(thunk));
};

export default configStore;