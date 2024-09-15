import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import './SignUp.css'; // Import your custom CSS

const SignUp = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="form-wrapper">
      <div className="backdrop" onClick={onClose} /> {/* Clicking on backdrop will also close the form */}
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <button className="close-btn" onClick={onClose}>
          <IoClose size={24} />
        </button>
        <div className="form-box">
          {isSignUp ? (
            <>
              <h2>Create Account</h2>
              <form>
                <div className="form-field">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <button className="buttock"type="submit">Sign Up</button>
                <p className="switch-link" onClick={toggleForm}>Already have an account? Log In</p>
              </form>
            </>
          ) : (
            <>
              <h2>Log In</h2>
              <form>
                <div className="form-field">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <button className='buttock' type="submit">Log In</button>
                <p className="switch-link" onClick={toggleForm}>Don't have an account? Sign Up</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
