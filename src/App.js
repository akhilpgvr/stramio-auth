import React, { useState } from "react";
import LoginForm from "./components/loginform";
import './App.css';

function App() {
  const[userName, setUserName] = useState("Hello");
  return (
    <div className="App" >
      <LoginForm/>
    </div>
  );
}

export default App;
