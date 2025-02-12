// import React, { useState } from "react";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("patient"); // Default role


//     const handleSubmit= async (e) => {
//       e.preventDefault();
//       const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ 
//           name,  
//           email, 
//           password 
//         }),
//       });
    
//       const data = await res.json();
//       console.log(data); 
//   };
  

//   return (
//     <div className="form-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Full Name" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           required 
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="patient">Patient</option>
//           <option value="doctor">Doctor</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // Default role

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim input values to prevent unnecessary spaces
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      alert("All fields are required!");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          password: trimmedPassword,
          role, // Include role in the request
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("Registration successful!");
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
