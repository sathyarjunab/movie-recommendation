// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to log in the user
    // For demonstration, let's assume the login is always successful
    console.log("Logging in with", formData);
    // Redirect to home page or dashboard after successful login
    history.push("/"); // Change to your desired route after login
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.inputField}
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.inputField}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          <a href="/forgot-password" className={styles.forgotPassword}>
            Forgot Password?
          </a>
        </form>
        <p className={styles.footerText}>
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
