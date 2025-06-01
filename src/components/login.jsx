import React, { useState } from "react";
import "./Login.css"; 

export default function Login() {
  const [users, setUsers] = useState([]);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", pass: "" });
  const [msg, setMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const found = users.find(
      (u) => u.email === user.email && u.pass === user.pass
    );
    setMsg(found ? `Welcome ${found.name}` : "Invalid email or password");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.pass) {
      setMsg("All fields are required");
      return;
    }
    setUsers([...users, user]);
    setMsg("Registration successful! Please login.");
    setUser({ name: "", email: "", pass: "" });
    setIsRegister(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          {isRegister && (
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={user.pass}
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
            required
          />
          <button type="submit">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        {msg && <p className="message">{msg}</p>}
        <p className="switch">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
}
