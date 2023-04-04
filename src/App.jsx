import React, { useState } from "react";
import Kanban from "./Kanban";
import Login from "./Login";
import Register from "./Register";
import './App.css';
const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (

      <div className="App">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>

  );
};

export default App;
