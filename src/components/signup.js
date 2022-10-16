import React, { useEffect } from 'react';
import './signup.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import auth from './firebaseconfig'
import { useAuth } from '../context';
import { Navigate } from 'react-router-dom';
import { db } from './firebaseconfig';
import {
  setDoc,
  doc,
}
  from "firebase/firestore"
export function Signup() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [passwordconfirm, setconfarmationPassword] = useState('')
  const [error, setError] = useState('')
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('')
  const register = async (e) => {
    e.preventDefault()
    if (passwordconfirm !== registerPassword) {
      return setError('Passwords do not match')
    }
    if (username === '') {
      return setError('Fill username field')
    }
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setLoading(true)
    } catch (err) {
      console.log(err);
      setError(getUserFriendlyErrorMessage(err.code))
    }
    setLoading(false)
  };
  useEffect(() => {
    if (user) {
      console.log(user)

      const ref = doc(db, "userinformation", user.uid)
      setDoc(ref, {
        email: user.email,
        id: user.uid,
        username,
        gameHistory:[],
        balance:20000,
        haveCard:false

      }).then((re) => {
        console.log('data in server')
        console.log(re)
      })
    }
  }, [user])

  const getUserFriendlyErrorMessage = (code) => {
    switch (code) {
      case 'auth/weak-password':
        return 'Weak password';
      case 'auth/email-already-in-use':
        return 'Email is already in use';
      default:
        return code;
    }
  }
  
  return (
    <div>
      {user ? <Navigate to="/" /> :
        <div className="auth-content">
          <div className="container">
            <div className="login-form">
              <h2>Sign up</h2>
              {error ? <div className="alert">{error}</div> : <div></div>}
              <form onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  register(e)
                }
              }}>
                <div className="for-inputs">
                  <div><label htmlFor="username">Username</label></div>
                  <input type="text" placeholder="Username" id="username"
                    onChange={(e) => {
                      setUsername(e.target.value)
                    }
                    }
                    //  onKeyDown={(e)=>{
                    //    if(e.keyCode===8){
                    //      setError('')
                    //    }
                    //  }}
                    onFocus={() => {
                      setError('')
                    }}
                  />
                </div>
                <div className="for-inputs">
                  <div><label htmlFor="em">Email</label></div>
                  <input type="email" placeholder="Email" id="em"
                    onChange={(e) => {
                      setRegisterEmail(e.target.value)
                    }}
                    //  onKeyDown={(e)=>{
                    //    if(e.keyCode===8){
                    //      setError('')
                    //    }
                    //  }}
                    onFocus={() => {
                      setError('')
                    }}
                  />
                </div>
                <div className="for-inputs">
                  <div><label htmlFor="passw">Password</label></div>
                  <input type="Password" placeholder="Password" id="passw"
                    onChange={(e) => {
                      setRegisterPassword(e.target.value)
                    }}
                    //  onKeyDown={(e)=>{
                    //    if(e.keyCode===8){
                    //      setError('')
                    //    }
                    //  }}
                    onFocus={() => {
                      setError('')
                    }}
                  />
                </div>
                <div className="for-inputs">
                  <div><label htmlFor="Password-Confirmation">Password Confirmation</label></div>
                  <input type="Password" placeholder="Password" id="Password-Confirmation"
                    onChange={(e) => {
                      setconfarmationPassword(e.target.value)
                    }
                    }
                    //  onKeyDown={(e)=>{
                    //    if(e.keyCode===8){
                    //      setError('')
                    //    }
                    //  }}
                    onFocus={() => {
                      setError('')
                    }}
                  />
                </div>
                <div className="for-btn">
                  <button className="btn" onClick={(e) => {
                    register(e)
                  }}>Sign Up</button>
                </div>
                <div className="end">
                  <p>Already have an account?</p>
                  <p className="last-item"><Link to={'/Login'}>Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      }

    </div>
  )
}