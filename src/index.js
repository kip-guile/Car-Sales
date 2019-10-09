import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as reducers from './state/reducers';

import 'bulma/css/bulma.css';
import './styles.scss';


// const combinedReducers = combineReducers({
//     price: reducers.additionalPriceReducer,
//     carFeatures: reducers.carReducer,
//     store: reducers.storeReducer,
// })


const store = createStore(
    reducers.reducer
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider><App /></Provider>, rootElement);
