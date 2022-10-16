import React from "react";
import { Link } from "react-router-dom";
import './login.css';
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from './firebaseconfig';
import { useAuth } from '../context';
import { Navigate } from "react-router-dom";
export function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState('');
  const { user } = useAuth();
  const [loading, setLoading] = useState(false)
  const login = async (e) => {
    e.preventDefault()
    if (loginEmail === '') {
      return setError('Fill Email field')
    }
    if (loginPassword === '') {
      return setError('Fill Password field')
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setLoading(true)
    } catch (err) {
      setError(err.code)
    }
    setLoading(false)
  };

  const logout = async () => {
    await signOut(auth);
  };
  
  return (
    <div>
      {user ? <Navigate to="/" /> :
        <div className="auth-content">
          <div className="container">
            <div className="login-form">
              <h2>Login</h2>
              {error ? <div className="alert">{error}</div> : <div></div>}
              <form onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  login(e)
                }
              }}>
                <div className="for-inputs">
                  <div><label htmlFor="Email">Email</label></div>
                  <input type="email" placeholder="Email" id="Email"
                    onChange={(e) => {
                      setLoginEmail(e.target.value)
                    }}
                    // onKeyDown={(e)=>{
                    //   if(e.keyCode===8){
                    //     setError('')
                    //   }
                    // }}
                    onFocus={() => {
                      setError('')
                    }}
                  />
                </div>
                <div className="for-inputs">
                  <div><label htmlFor="password">Password</label></div>
                  <input type="password" name="Password" placeholder="Password" id="password"
                    onChange={(e) => {
                      setLoginPassword(e.target.value)
                    }}
                    // onKeyDown={(e)=>{
                    //   if(e.keyCode===8){
                    //     setError('')
                    //   }
                    // }}
                    onFocus={() => {
                      setError('')
                    }}
                  />
                </div>
                <div className="for-btn">
                  <button className="btn" onClick={(e) => {
                    login(e)
                  }}>LOGIN NOW</button>
                </div>
                <div className="end">
                  <p>Don't have account? </p>
                  <p className="last-item"><Link to={'/signup'}>Sign up now</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
