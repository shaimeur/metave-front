import React, { useEffect, useState } from "react";
import Kanban from "./components/Kanban";
import Login from "./auth/Login";
import Register from "./auth/Register";
import './App.css';
const App = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const [loggedIn,setLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
  },[])
  return (

      <div className="App">
        {loggedIn && <button style={{position:"fixed",right:'10px',top:'10px'}} onClick={()=>{localStorage.clear();;setLoggedIn(false)}}>Logout</button>}
        {!loggedIn && <>
          {(currentForm === "login") ? (
            <Login onFormSwitch={toggleForm} isLoggedin={(bol)=>{setLoggedIn(bol)}} />
          ) : (
            <Register onFormSwitch={toggleForm} setCurrentForm={(form)=>{setCurrentForm(form)}} />
          )}
        </>}
        {loggedIn && <Kanban/>}
      </div>

  );
};

export default App;
