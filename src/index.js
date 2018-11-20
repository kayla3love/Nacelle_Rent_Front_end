import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './containers/common/App';
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers/Reducer'

const store = createStore(Reducer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}><App/></Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

