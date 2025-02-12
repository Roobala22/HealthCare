// import React, { useState } from "react";

// function MedicalRecords() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Uploaded Medical Record:", file);
//   };

//   return (
//     <div className="form-container">
//       <h2>Upload Medical Records</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} required />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

// export default MedicalRecords;
import React, { useState } from "react";

function MedicalRecords() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const patientId = "12345"; // 🔹 Replace with logged-in patient ID from localStorage or context

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(""); // Clear any previous errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please upload a medical record file.");
      return;
    }

    // 🔹 Extract Patient ID from file name (Assuming format: "PatientID_XXXX.pdf")
    const fileName = file.name.split("_")[0]; // Extract first part of filename
    console.log("Extracted File Patient ID:", fileName);

    if (fileName !== patientId) {
      setError("Mismatch! This medical record does not belong to the logged-in patient.");
      return;
    }

    // 🔹 If valid, upload file to backend
    const formData = new FormData();
    formData.append("file", file);
    formData.append("patientId", patientId);

    try {
   const res = await fetch(`${process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"}/api/auth/register `, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Uploaded Medical Record:", data);
    } catch (err) {
      setError("File upload failed. Try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Upload Medical Records</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default MedicalRecords;
