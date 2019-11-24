import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore} from "redux";
// @ts-ignore
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reducer from "./reducer/reducer";

const store:any = createStore(reducer, composeWithDevTools());

const app:any = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
