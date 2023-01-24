import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
 ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
       <App />
       </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
