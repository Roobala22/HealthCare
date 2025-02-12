import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MediCarePro</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Book Appointment</Link></li>
        <li><Link to="/medical-records">Medical Records</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
