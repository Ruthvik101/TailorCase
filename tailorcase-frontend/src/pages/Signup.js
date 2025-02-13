// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     try {
//       await axios.post("http://localhost:5000/api/auth/signup", formData);
//       setMessage("Signup successful!"); // Show success message
//       setFormData({ name: "", email: "", password: "" }); // Clear form fields

//       // Hide success message after 3 seconds
//       setTimeout(() => {
//         setMessage("");
//       }, 3000);
//     } catch (error) {
//       setError(error.response?.data?.error || "Signup failed"); // Show detailed error
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Sign Up</h2>
//       {message && <div className="alert alert-success">{message}</div>}
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="btn btn-primary">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Signup successful!"); // Show popup instead of UI message
      setFormData({ name: "", email: "", password: "" }); // Clear form fields
    } catch (error) {
      setError(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
