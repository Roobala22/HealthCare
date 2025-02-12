import React, { useState } from "react";

function Appointment() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment details:", { name, date, doctor });
  };

  return (
    <div className="form-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Preferred Doctor" 
          value={doctor} 
          onChange={(e) => setDoctor(e.target.value)} 
          required 
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default Appointment;
