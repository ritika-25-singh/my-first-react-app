// import logo from './logo.svg';
import React from 'react';
import './App.css';
const element = <Welcome name="Sara" />,
  user = {
    firstName: 'Ritika',
    lastName: 'Singh'
  },
  name = 'my-app';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
function Welcome(props) {
  return <span>Const element name, {props.name}</span>;
}
function Avatar(props) {
  return <img className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
}
function UserInfo(props) {
  return <div className="UserInfo">
    <Avatar user={props.user} />
    <div className="UserInfo-name">
      {props.user.name}
    </div>
  </div>
}
function formatDate(date) {
  return date.toLocaleDateString();
}
// function App(props) { this prop are coming from app component on index.js 
// is using props then use this.prop.attributName for class method use this.state.attributename

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), text: "State Method", author: "Ritika",isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e,state) {
    console.log(state);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div className="Comment">
              <UserInfo user={this.state.author} />
              <div className="Comment-text">
                {this.state.text}
              </div>
              <div className="Comment-date">
                Date : {formatDate(this.state.date)} TIME :: {new Date().toLocaleTimeString()}
              </div>
            </div>
            <div>
              <p>Click me</p> <p><span>Dyanmic name format, {formatName(user)} to {name}!</span></p>{element}
              <button onClick={(e) => this.handleClick(e,this.state.date)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
            </div>
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

        </header>
      </div>
    );
  }
}

export default App;
