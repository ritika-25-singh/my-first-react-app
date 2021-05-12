import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
const name = 'my-app';
const user = {
  firstName: 'Ritika',
  lastName: 'Singh'
};
const element = (
  <h1>
    Hello, {formatName(user)} to {name}!
  </h1>
);
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />,
  // </React.StrictMode>,
   element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
