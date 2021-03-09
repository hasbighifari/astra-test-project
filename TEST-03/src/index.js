import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from './config/firebase/index'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Provider } from 'react-redux';
import store from './store';
console.log("firebase", firebase)

Sentry.init({
  dsn: "https://e5e0f42221fb49d49733c1d55b10a70d@o546865.ingest.sentry.io/5668763",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
