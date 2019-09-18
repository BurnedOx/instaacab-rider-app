import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configSore';
import Routes from './Routes';

const store = configStore();

export default function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}