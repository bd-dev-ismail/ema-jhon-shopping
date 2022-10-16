import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
      <div className="form-container">
        <h3 className="form-title">Login</h3>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Enter Your password"
              required
            />
          </div>
          <input type="submit" value="Login" className="btn-login" />
        </form>
        <p>
          New to Ema-Jhon?{" "}
          <Link to="/signup" style={{ color: "rgba(255, 153, 0, 1)" }}>
            Create new Account
          </Link>
        </p>
      </div>
    );
};

export default Login;