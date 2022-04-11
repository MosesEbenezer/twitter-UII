import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./Home";
import useToken from "./useToken";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // useEffect(() => {
  //   // if(token) alert(token)
  // }, [token])

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/register" element={<Register />} exact />
          <Route path="/" element={<Login />} exact />
          <Route path="/home" element={<Home />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
