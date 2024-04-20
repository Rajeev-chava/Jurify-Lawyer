import React, { useState } from 'react';
import './signup.css';
import Cookies from 'universal-cookie';
const cookies=new Cookies();
const Signup = () => {
    const [isActive, setIsActive] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = () => {
      setIsActive(!isActive);
    };

    const loginHandler = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/clients/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.message === 'success') {
                alert('login successful');
                cookies.set('id',data.id);
                cookies.set('name',data.name)
                window.location.replace('/client');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const signupHandler = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/clients/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName:name, email, phoneNumber:mobile, password }),
            });
            const data = await response.json();
            if (response.message === 'success') {
                alert('Signup successful');
                // Redirect to login or do something else
                setIsActive(!isActive);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

  return (
    <div className='container-fluid signinbody'>
    <div className={`container ${isActive ? 'active' : ''}`}  id="container">
    <div className="form-container sign-up">
        <form onSubmit={signupHandler}>
            <h1>Create Account</h1>
         
            <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" name="mobile" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Sign Up</button>
        </form>
    </div>
    <div className="form-container sign-in">
        <form onSubmit={loginHandler}>
            <h1>Log In</h1>
           
          
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
            <button>Login</button>
        </form>
    </div>
    <div className="toggle-container">
        <div className="toggle">
            <div className="toggle-panel toggle-right">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className="" id="login" onClick={handleRegisterClick}>Sign up</button>
            </div>
            <div className="toggle-panel toggle-left">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of site features</p>
                <button className="" id="register" onClick={handleRegisterClick}>Login</button>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Signup;
