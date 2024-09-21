import React from 'react';
import './App.css';
import { IoMdClose } from "react-icons/io";

const SignUpDialog = ({ onClose }) => {
  // Handler for Customer registration
  const handleRegisterAsCustomer = () => {
    window.location.href = "https://customer-ayushphere.onrender.com/";
  };

  // Handler for Seller or Admin registration
  const handleRegisterAsSeller = () => {
    window.location.href = "https://admin-eq5p.onrender.com/";
  };

  return (
    <div className="dialog-wrapper">
      <div className="dialog">
        <div className="dialog-header">
          <h2>Register</h2>
          <button className="close-button" onClick={onClose}>
            <h3 className='icon'><IoMdClose /></h3>
          </button>
        </div>
        <div className="dialog-body">
          <button onClick={handleRegisterAsCustomer}>For Customer</button>
          <button onClick={handleRegisterAsSeller}>For Seller</button>
          <button onClick={onClose}>For Govt. official</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpDialog;
