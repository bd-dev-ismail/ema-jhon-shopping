import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
  const [error, setError] = useState(null);
  const handalSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confrim = form.confrim.value;
    console.log(email, password, confrim);
    if(password.length < 6){
      return setError('Password should be 6 characters or long.');
    }
    if(password !== confrim){
      return setError('Your password did not Match');
    }
  }
    return (
      <div className="form-container" style={{height: '750px'}}>
        <h3 className="form-title">Sign Up</h3>
        <form onSubmit={handalSubmit}>
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
          <div className="form-control">
            <label htmlFor="confrim">Confrim Password</label>
            <input
              type="password"
              name="confrim"
              id="confrim"
              placeholder="Confim password"
              required
            />
          </div>
          <div><h6 className='text-error'>{error}</h6></div>
          <input type="submit" value="Sign Up" className="btn-login" />
        </form>
        <p>
          Already have an account? 
          <Link to="/login" style={{ color: "rgba(255, 153, 0, 1)" }}>
            Login Now
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

export default SignUp;