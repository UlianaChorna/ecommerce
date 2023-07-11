import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import "./login.css"
import styled from "styled-components";
import React, { useState } from 'react'

const Error = styled.span`
  color: red;
`;


const Login = () => {
  const [username,setUserName] =useState('');
  const [password,setUserPassword] =useState('');
  const dispatch = useDispatch()
  const {  error } = useSelector((state) => state.user);

const handleLogin = (e ) => {
  e.preventDefault();
  login(dispatch,{username,password})
}

  return (
  <div className='container-register'>
    <div className="wrapper-login">
      <h1 className="title-register">SING IN</h1>
      <form action="" className="login-form">
        
        <input type="text" className="register-input" placeholder="username"  onChange={(e) => setUserName(e.target.value)}/>
        <input type="text" className="register-input" placeholder="password"  onChange={(e) => setUserPassword(e.target.value)}/>
       
        <button className="btn-create" onClick={handleLogin}  >LOGIN </button>
        {error && <Error>Something went wrong...</Error>}
        <a href="" className="link">DO NOT YOU REMEMBER THE PASSWORD?</a>
        <a href="" className="link">CREATE A NEW ACCOUNT</a>
      </form>

    </div>
  </div>
  )
}

export default Login