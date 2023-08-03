import './App.css';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';


function App() {
  return (
    <div className="App">
    <h1>AUTH-O-MORPH</h1>
    <LoginButton />
    <LogoutButton />
    <Profile />
    </div>
  );
}

export default App;
