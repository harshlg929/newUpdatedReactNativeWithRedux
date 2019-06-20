import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/Reducers/index';
import Routes from './src/Components/Routes';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}
