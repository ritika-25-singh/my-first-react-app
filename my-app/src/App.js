// import logo from './logo.svg';
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
  return <p>Hello, {props.name}</p>;
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
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      <div>   <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div> </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div> 
         Hello Ritika {element}
        <span>Hello, {formatName(user)} to {name}!</span>
        </div>
      </header>
    </div>
  );
}

export default App;
