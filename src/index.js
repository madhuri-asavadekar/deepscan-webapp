import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'elmer/dist/global';
import 'elmer/dist/style';
import 'elmer/dist/style.css';

import store from './state/store';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
