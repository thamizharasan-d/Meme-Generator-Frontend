import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Form.css';
import Header from './Header';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      navigate("/Home");
      alert(`Welcome, ${res.data.user.name}`);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };
  return (
  <div>
    <Header/>  
    <div id="ff">
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/Signup">Sign up</Link></p>
            </form>
        </div>
    </div>
  </div>
  );
}

export default Login;