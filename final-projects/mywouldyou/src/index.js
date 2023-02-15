import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import middlewares from './middlewares';

const store = createStore(reducers, middlewares)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
