import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; 
import "./index.css"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appointment from "./pages/Appoinment";
import MedicalRecords from "./pages/MedicalRecords";
import Navbar from "./components/Navbar";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
      </Routes>
    </Router>
  );
}

export default App;
