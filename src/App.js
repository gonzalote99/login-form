import React, {useState} from 'react';
import './style.css';
import LoginForm from './LoginForm'

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "pass123"
  }

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');
  const Login = details => {
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password)
    {
      console.log('admin logded in');
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else {
      console.log('details not match');
      setError('details not match');
    }

  }
  const Logout = () => {
    console.log('logout');
    setUser({name: '', email: ''})
  }

  return (
    <div className='App'>
      {(user.email !== '')? (
        <div className='welcome'>
            <h2>welcome <span>{user.name}</span></h2>
            <button onClick={Logout} >logout</button>
          </div>
      ): (
        <LoginForm Login={Login} error={error} /> 
      )}
    </div>
  );
}


export default App;