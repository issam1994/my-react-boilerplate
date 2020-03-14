import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//tailwindcss
import './styles/output/tailwindcss.css'
//transitions
import './styles/output/transitions.css'
//store
import {StoreProvider} from 'easy-peasy'
import store from './store'
//axios config
import './config/axios'

ReactDOM.render(<StoreProvider store={store}><App /></StoreProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
