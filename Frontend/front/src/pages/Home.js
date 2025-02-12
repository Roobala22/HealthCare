import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const homeStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    textAlign: "center",
    backgroundImage: "url('/bg-image.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "green",
    paddingTop: "120px",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const handleClick = () => {
    navigate("/Login"); // Redirect to Booking Page
  };

  return (
    <div style={homeStyle}>
      <h1>Welcome to MediCarePro</h1>
      <p>Your trusted healthcare solution.</p>
      <p>We provide seamless patient management and healthcare services.</p>
      <button style={buttonStyle} onClick={handleClick}>Get Started</button>
    </div>
  );
};

export default Home;
