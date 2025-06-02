// src/components/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

export default function Login() {
  const { users, setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({ email: "", pass: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = users.find(
      (u) => u.email === formData.email && u.pass === formData.pass
    );
    if (match) {
      setUser({ name: match.name, email: match.email, token: "abcd1234" });
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        /><br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
        /><br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate("/register")}>Create Account</button>
    </div>
  );
}
