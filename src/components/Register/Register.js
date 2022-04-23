import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../google.png'


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }
    const getConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Passwords do not match');
        }
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={getEmail} type="email" required />
                </div>
                <div className='form-group'>
                    <label htmlFor="confirm-password">Password</label>
                    <input onBlur={getPassword} type="password" required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Confirm Password</label>
                    <input onBlur={getConfirmPassword} type="password" required />
                </div>
                <input className='submit-btn' type="submit" value="Sign Up" />
                <p style={{ color: 'red' }}>{error}</p>
                <p>Already Have and account? <Link className='link-btn' to='/login'>Login</Link></p>
                <p className='line'><span>or</span></p>
                <div className='social'>
                    <img src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
            </form>
        </div>
    );
};

export default Register;