import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import variable_1_1 from './app/ComponentB'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={configureStore}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// variable_1_1