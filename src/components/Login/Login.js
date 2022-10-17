import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css'
const Login = () => {
  const navigate = useNavigate();
  const {logIn} = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handalLogIn = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset();
      navigate(from ,{replace: true});
    })
    .catch(error =>{
       console.error(error);
       
    })
  }
    return (
      <div className="form-container">
        <h3 className="form-title">Login</h3>
        <form onSubmit={handalLogIn}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
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
        <div style={{ textAlign: "center" }}>Or</div>
        <button className="btn-google">
          <i
            className="fa-brands fa-google"
            style={{
              color: "rgba(235, 67, 53, 1)",
              marginRight: "20px",
              fontSize: "21px",
            }}
          ></i>
          Sign In With Google
        </button>
      </div>
    );
};

export default Login;