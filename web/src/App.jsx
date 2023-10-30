import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import PatataPage from "./components/PatataPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {


  return (
    
      <Routes>
        <Route path="/patata" element={ <PatataPage /> } />
        <Route path="/signup" element={ <SignUpPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
      </Routes>
 
  )
}

export default App;
