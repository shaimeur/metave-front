import React, { useState } from "react";
import Kanban from "./components/Kanban";
import Login from "./auth/Login";
import Register from "./auth/Register";
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
        <Kanban/>
      </div>

  );
};

export default App;
