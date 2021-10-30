import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as ProviderRedux } from 'react-redux';
import SetupStore from './redux/SetupStore';

const store = SetupStore();

ReactDOM.render(
  <React.StrictMode>
    <ProviderRedux store={store}>
      <App />
    </ProviderRedux>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();