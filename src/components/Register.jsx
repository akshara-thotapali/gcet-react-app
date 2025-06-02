// src/components/Register.jsx
import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [formData, setFormData] = useState({ name: "", email: "", pass: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.pass) {
      alert("Please fill all fields");
      return;
    }
    const alreadyExists = users.some((u) => u.email === formData.email);
    if (alreadyExists) {
      alert("User already exists");
    } else {
      setUsers([...users, formData]);
      alert("Registered successfully");
      navigate("/login");
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        /><br />
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
    </div>
  );
}
