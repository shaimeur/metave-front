import React from "react";
import { useState } from "react";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setName(event.target.value);
  };
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
      <h2>Register</h2>

      <form className="register-form" onSubmit={submitHandler}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          placeholder="name"
          onChange={nameHandler}
        />
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
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
