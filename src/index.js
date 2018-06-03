import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
//import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import store from './store'

const app = <Provider store = {store}>
              <BrowserRouter>
                <App/>
              </BrowserRouter>
            </Provider>
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
