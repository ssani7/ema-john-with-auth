import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../google.png'
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <form action="">
                <h1>Login</h1>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" required />
                </div>
                <input className='submit-btn' type="submit" value="Login" />
                <p>New to Ema-John? <Link className='link-btn' to='/register'>Create New Account</Link></p>
                <p className='line'><span>or</span></p>
                <div className='social'>
                    <img src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
            </form>
        </div>
    );
};

export default Login;