import React from "react";
import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("====> Submit called");
    let registerResult = await fetch("http://localhost:3000/login",{
      method:'POST',
      headers:{ 'Content-Type': 'application/json' },
      body:JSON.stringify({email,password})
    });
    registerResult = await registerResult.json();
    if(registerResult.token){
      localStorage.setItem('token',registerResult.token);
      localStorage.setItem('user_email',registerResult.email);
      props.isLoggedin(true);
    }else{
      console.log('registerResult',registerResult);
      alert("Login invalid");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>

      <form className="login-form" onSubmit={submitHandler}>
        <label htmlFor="email">email</label>
        <input
          type="text"
          value={email}
          name="email"
          id="email"
          placeholder="exemple@email.com"
          onChange={emailHandler}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={password}
          name="password"
          id="password"
          placeholder="************"
          onChange={passwordHandler}
        />
        <button type="submit">Login</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
