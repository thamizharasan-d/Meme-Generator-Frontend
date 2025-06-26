import { Link } from 'react-router-dom';
import './Form.css';
import Header from './Header';
import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/auth/signup", form);
    console.log("Signup success:", res.data);
    alert("Signup successful!");
    navigate("/");
  } catch (err) {
    console.error("Signup failed:", err);
    if (err.response) {
      console.error("Error response from backend:", err.response.data);
      alert(err.response.data.message); 
    } else {
      alert("Signup failed: No server response.");
    }
  }
};

  return (
    <div>
        <Header/>
        <div id='ff'>
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input type="email" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/">Login</Link></p>
            </form>
        </div>
        </div>
    </div>
  );
}

export default Signup;