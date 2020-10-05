import React, { useState } from 'react';
import Header from '../Header/Header';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import logo from '../logos/Group 1329.png'

import google from '../logos/google.png';


  function Login() {
    const {register, errors, watch  } = useForm();
    const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

 

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser({...res});
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  

    


  return (
   
   
    <div style={{textAlign: 'center'}}>
     <Link to='/home' > <img src={logo} height="85" alt=""/></Link>
      <br/><br/>
    
    <div className="login-container">   
      <h4>Login with</h4>
      <br/><br/>
    <div className="social">
      <div className="google-div validate-input m-b-20">
        <button className="google" onClick={googleSignIn}><img src={google} height="15" alt=""/>Continue with Google</button>
      </div>
      <br/>
      <p style={{textAlign:"center"}}>{newUser ? "Already have an account ? ":"Don't have account ?"  }
      <span onClick={()=>setNewUser(!newUser)} style={{color:"#F9A51A",cursor:"pointer"}}>{newUser? " Login" :" Create Account"}</span></p>
      
    </div>
    </div>

    </div>
    
   
   
   
  );
}

export default Login;