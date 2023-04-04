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
  const submitHandler = (event) => {
    event.preventDefault();
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
