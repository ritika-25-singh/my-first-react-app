import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
 //comment above is exampale of props(sent from app component)
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

   ReactDOM.render(
  <React.StrictMode>
    <App/>
     {/* <Clock date={new Date()} />, */}
    <App  date={comment.date}
    text={comment.text}
    author={comment.author}/>,    
  
  </React.StrictMode>,
  document.getElementById('root')
);

  // setInterval(tick, 1000); wrap ReactDOM.render in function and call to update dom after 1000 sec


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
