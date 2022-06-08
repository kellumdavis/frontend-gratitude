import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers'
import App from './App';


const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>  
        <Provider store={store}>
            <App />
        </Provider> 
    </Router>
  );