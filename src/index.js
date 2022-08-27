import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/font-awesome/css/font-awesome.min.css"    //link font-awesome
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"    //import bootstrap
import { Provider } from 'react-redux';
import { store } from "./redux/Store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

