import React, { useState } from 'react';
import './signup.css';
import Cookies from 'universal-cookie';

const cookies=new Cookies();

const LawyerSignUp = () => {
    const [isActive, setIsActive] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    // const [mobile, setMobile] = useState('');

    const handleRegisterClick = () => {
      setIsActive(!isActive);
    };

    const loginHandler = async (event) => {
       event.preventDefault();
  
    const response = await fetch('http://localhost:5000/api/lawyers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
        const data = await response.json();
        if(data.message==='success'){
            cookies.set('id',data.id);
            cookies.set('name',data.name)
            alert('Login successfully');
            window.location.replace('/lawyerhome');
        }
        else{
            alert(data.message);
        }
    };

    const signupHandler = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/lawyer/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName:name, email, password }),
      });
        const data = await response.json();
        if(data.message==='success'){
            alert('Account created successfully');
            setIsActive(!isActive);
        }
        else{
            alert(data.message);
        }
        // alert(data.message);
      
    };
  
  return (
    <div className='container-fluid signinbody'>
    <div className={`container ${isActive ? 'active' : ''}`}  id="container">
    <div className="form-container sign-up">
        <form onSubmit={signupHandler}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {/* <input type="tel" placeholder='Mobile Number' value={mobile} onChange={(e) => setMobile(e.target.value)} /> */}
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Sign Up</button>
        </form>
    </div>
    <div className="form-container sign-in">
        <form onSubmit={loginHandler}>
            <h1>Log In</h1>
            <input type="email" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Log In</button>
        </form>
    </div>
    <div className="toggle-container">
        <div className="toggle">
            <div className="toggle-panel toggle-right">
                <h1>Welcome Back!</h1>
                <p>Enter your details to use all of site features</p>
                <p>Don't have account?</p>
                <button className="my-0" id="login" onClick={handleRegisterClick}>Sign up</button>
            </div>
            <div className="toggle-panel toggle-left">
                <h1>Hello, Friend!</h1>
                <p>Ready to take your practice to the next level? Sign in and let's streamline your appointments like a well-oiled case !!</p>
                 <p className='pt-5'>already have a account ?</p>
                <button className="my-0" id="register"onClick={handleRegisterClick}>login</button>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default LawyerSignUp;
