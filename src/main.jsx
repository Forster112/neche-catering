import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App'
import './index.css'
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
